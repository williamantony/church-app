import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createForm, showModal, hideModal } from '../../../../redux/actions';
import './DatePicker.css';
import DatePickerCell from './components/DatePickerCell/DatePickerCell';
import InputSelector from '../Select/components/InputSelector/InputSelector';

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
    };
  }

  componentWillMount() {
    this.props.createForm(this.state.form);
  }

  componentWillReceiveProps(props) {
    const formData = props.formData[this.state.form];

    const month = (formData.month !== undefined) ? formData.month : this.state.month;
    const year = (formData.year !== undefined) ? formData.year : this.state.year;
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
      <InputSelector
        form={this.state.form}
        name="month"
        label="Select Month"
        options={
          this.state.monthsList.map((month, index) => {
            return {
              label: `${(index < 9) ? 0 : ''}${index + 1} - ${month}`,
              value: index,
            };
          })
        }
        modalId={modalId}
      />
    );

    this.props.showModal(selectorOptions, 'Select Month', modalId);
  }

  showYearOptions = () => {
    const modalId = `modal_${new Date().getTime()}`;

    const options = [];

    const thisYear = new Date().getFullYear();

    for (let i = thisYear - 50; i < thisYear + 50; i++) {
      options.push({
        label: i,
        value: i,
      });
    }

    const selectorOptions = (
      <InputSelector
        form={this.state.form}
        name="year"
        label="Select Year"
        options={options}
        modalId={modalId}
      />
    );

    this.props.showModal(selectorOptions, 'Select Year', modalId);
  }

  render() {
    const { year, month, monthName } = this.state;
    const daysList = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    return (
      <div className="DatePicker">
        <div className="DatePicker__head">
          <div className="DatePicker__selected-month" onClick={this.showMonthOptions}>{monthName}</div>
          -
          <div className="DatePicker__selected-year" onClick={this.showYearOptions}>{year}</div>
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
              return <DatePickerCell key={`${date}_${index + 1}`} date={date} month={month} year={year} />;
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
  };
};

const mapDispatchToProps = {
  createForm,
  showModal,
  hideModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);
