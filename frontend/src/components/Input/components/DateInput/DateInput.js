import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DateInput.css';

class DateInput extends Component {
  

  // createDates = (year, month) => {

  //   const firstDay = new Date(year, month - 1, 1).getDay();
  //   const lastDay = new Date(year, month, 0).getDay();
  //   const lastDate = new Date(year, month, 0).getDate();

  //   const preMonthDays = Array.from(new Array(firstDay)).map((day, index) => {
  //     const previousMonthLastDate = new Date(year, month - 1, 0).getDate();
  //     return previousMonthLastDate - ((firstDay - 1) - index);
  //   });

  //   const currentMonthDays = Array.from(new Array(lastDate)).map((day, index) => index + 1);

  //   const postMonthDays = Array.from(new Array(7 - (lastDay + 1))).map((day, index) => index + 1);

  //   return [
  //     ...preMonthDays,
  //     ...currentMonthDays,
  //     ...postMonthDays,
  //   ];

  // }
  createDates = (year, month) => {
    
    const days = [];
    
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);
    
    for (let i = 0; i < 42; i++) {
      if (i < firstDay.getDay()) {
        days.push(new Date(year, month - 1, -(firstDay.getDay() - i - 1)).getDate());
      } else if (i - firstDay.getDay() >= lastDay.getDate()) {
        days.push((i - (firstDay.getDay() + lastDay.getDate())) + 1);
      } else {
        days.push(i - (firstDay.getDay() - 1));
      }
    }
    
    return days;

  }

  render() {
    this.createDates(2018, 2);
    return (
      <div className="DateInput">
        <div className="DateInput__dates">
          {/* {
            this.createDates(2018, 2).map((date, index) => {
              return (
                <div key={index} className="DateInput__dates-item">{date}</div>
              );
            })
          } */}
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
