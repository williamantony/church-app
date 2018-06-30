import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStorage } from '../../../../redux/actions';
import './MonthPicker.css';
import MonthPickerCell from './components/MonthPickerCell/MonthPickerCell';

class MonthPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monthsList: [
        'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December',
      ],
      month: new Date().getMonth(),
      modalId: props.modalId,
    };
  }

  componentWillMount() {
    this.props.createStorage('_Input', '_Date');
  }

  componentWillReceiveProps(props) {
    const InputDate = props.storage['_Input']['_Date'];
    const { month } = InputDate;
    this.setState({
      month: month !== undefined ? month : this.state.month,
    });
  }

  render() {
    return (
      <div className="MonthPicker">
        {
          this.state.monthsList.map((month, index) => {
            const key = `${(new Date().getTime())}_${index + 1}`;
            return (
              <MonthPickerCell
                key={key}
                monthName={month}
                month={index}
                modalId={this.state.modalId}
              />
            );
          })
        }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    storage: state.storage,
  };
};

const mapDispatchToProps = {
  createStorage,
};

export default connect(mapStateToProps, mapDispatchToProps)(MonthPicker);
