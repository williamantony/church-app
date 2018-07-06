import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createForm, createStorage, setStorageData, showModal, hideModal } from '../../../../redux/actions';
import './DatePicker.css';
import DatePickerCell from './components/DatePickerCell/DatePickerCell';
import MonthPicker from '../MonthPicker/MonthPicker';

class DatePicker extends Component {
  constructor(props) {
    super(props);

    const year = props.year || new Date().getFullYear();
    const month = props.month || new Date().getMonth();
    const monthsList = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December',
    ];

    this.state = {
      form: '__DatePicker_Input',
      year,
      month,
      monthName: monthsList[month],
      monthsList,
      yearInput: year,
      modalId: props.modalId,
    };
  }

  componentWillMount() {
    this.props.createForm(this.state.form);
    this.props.createStorage('_Input', '_Date');
  }

  componentWillReceiveProps(props) {
    const InputDate = props.storage['_Input']['_Date'];

    const month = (InputDate.month !== undefined) ? InputDate.month : this.state.month;
    const year = (InputDate.year !== undefined) ? InputDate.year : this.state.year;
    const monthName = this.state.monthsList[month];

    this.setState({ year, month, monthName });
  }

  generateDays = (year, month) => {
    const days = [];

    for (let i = 0; i < 42; i++) {
      const date = new Date(year, month);
      date.setDate((0 - (date.getDay() - 1)) + i);
      days.push(date.getTime());
    }

    return days;
  }

  showMonthOptions = () => {
    const modalId = `modal_${new Date().getTime()}`;

    const selectorOptions = (
      <MonthPicker
        modalId={modalId}
      />
    );

    const modalOptions = {
      type: 'INPUT',
      title: 'Select Month',
    };

    this.props.showModal(selectorOptions, modalId, modalOptions);
  }

  handleYearInput = (event) => {
    event.preventDefault();

    const { value } = event.target;
    const { length } = value.trim();

    if (length === 4) {
      const storage = {
        data: {
          year: value,
        },
        database: '_Input',
        table: '_Date',
      };

      this.props.setStorageData(storage.data, storage.database, storage.table);
    }

    if (length < 5) {
      this.setState({
        yearInput: value,
      });
    }
  }

  handleInvalidYearInput = (event) => {
    event.preventDefault();

    const { yearInput } = this.state;

    if (yearInput.toString().trim().length < 4) {
      const InputDate = this.props.storage['_Input']['_Date'];
      const year = (InputDate.year !== undefined) ? InputDate.year : new Date().getFullYear();

      this.setState({ yearInput: year });
    }
  }

  render() {
    const {
      year, month, monthName, yearInput, modalId,
    } = this.state;
    const daysList = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    return (
      <div className="DatePicker">
        <div className="DatePicker__head">
          <div className="DatePicker__selected-month" onClick={this.showMonthOptions}>{monthName}</div>
          -
          <div className="DatePicker__selected-year" onClick={this.showYearOptions}>
            <input
              type="number"
              value={yearInput}
              onChange={this.handleYearInput}
              onBlur={this.handleInvalidYearInput}
            />
          </div>
        </div>
        <div className="DatePicker__days-label">
          {
            daysList.map((day) => {
              return <div key={day} className="DatePicker__day">{day}</div>;
            })
          }
        </div>
        <div className="DatePicker__dates">
          {
            this.generateDays(year, month).map((date, index) => {
              return (
                <DatePickerCell
                  key={`${date}_${index + 1}`}
                  date={date}
                  month={month}
                  year={year}
                  modalId={modalId}
                />
              );
            })
          }
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    formData: state.form,
    storage: state.storage,
  };
};

const mapDispatchToProps = {
  createForm,
  createStorage,
  setStorageData,
  showModal,
  hideModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);
