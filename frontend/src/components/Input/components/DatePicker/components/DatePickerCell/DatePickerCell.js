import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setStorageData, showModal, hideModal } from '../../../../../../redux/actions';
import './DatePickerCell.css';

class DatePickerCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: props.date,
      date: new Date(props.date),
      year: props.year,
      month: props.month,
      modalId: props.modalId,
      isCurrentMonth: false,
      isSelected: false,
      isToday: false,
    };
  }

  componentWillMount() {
    const { year, month, timestamp } = this.state;

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const isToday = timestamp === today.getTime();

    const selectedMonth = new Date(year, month);
    const thisDay = new Date(timestamp);
    thisDay.setDate(1);

    const isCurrentMonth = thisDay.getTime() === selectedMonth.getTime();

    this.setState({
      isToday,
      isCurrentMonth,
    });
  }

  handleClick = () => {
    const { date, modalId } = this.state;

    const data = {
      date: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
    };
    this.props.setStorageData(data, '_Input', '_Date');

    setTimeout(() => {
      this.props.hideModal(modalId);
    }, 250);
  }

  render() {
    const {
      date, isToday, isCurrentMonth, isSelected,
    } = this.state;

    return (
      <div
        className="DatePickerCell"
        data-today={isToday}
        data-current-month={isCurrentMonth}
        data-selected={isSelected}
        onClick={this.handleClick}
      >
        <div className="DatePickerCell__date">{date.getDate()}</div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  setStorageData,
  showModal,
  hideModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(DatePickerCell);
