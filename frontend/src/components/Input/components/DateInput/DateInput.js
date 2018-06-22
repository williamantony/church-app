import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DateInput.css';

class DateInput extends Component {

  generateDates = (year, month) => {

    const startOfMonth = new Date(year, month - 1, 1);
    const endOfMonth = new Date(year, month, 0);

    const firstDay = startOfMonth.getDay();
    const lastDate = endOfMonth.getDate();
    const lastDatePrevMonth = new Date(year, month - 1, 0).getDate();

    const days = [];

    for (let i = 0; i < 42; i++) {

      const thisDay = {};

      if (i < firstDay) {
        thisDay.type = 'previous';
        thisDay.date = lastDatePrevMonth - (firstDay - i - 1);
      } else if (i > lastDate + (firstDay - 1)) {
        thisDay.type = 'next';
        thisDay.date = i - lastDate - (firstDay - 1);
      } else {
        thisDay.type = 'current';
        thisDay.date = i - (firstDay - 1);
      }

      days.push(thisDay);

    }

    return days;

  }

  render() {
    return (
      <div className="DateInput">
        <div className="DateInput__dates">
          {
            this.generateDates(2018, 3).map((day, index) => {
              return (
                <div key={index} className="DateInput__dates-item" data-date-type={day.type}>{day.date}</div>
              );
            })
          }
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(DateInput);
