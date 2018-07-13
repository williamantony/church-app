import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PeopleFactSheet.css';

class PeopleFactSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: {
        streetAddress: '5000 N Washingtion Ave',
        city: 'Chicago',
        state: 'IL',
        zipcode: '60000',
      },
      phoneNumber: [
        '+1 (888) 888-8888',
      ],
      emailAddress: [
        'email@example.com',
      ],
    };
  }

  render() {
    return (
      <div className="PeopleFactSheet">
        <div className="PeopleFactSheet__title unselectable">Contact Information</div>

        <div className="PeopleFactSheet__section">
          <div className="PeopleFactSheet__section__button--update" />
          <div className="PeopleFactSheet__section__text">
            <div className="PeopleFactSheet__section-label unselectable">Address</div>
            <div className="PeopleFactSheet__section-value">
              { this.state.address.streetAddress }
              <br />
              { `${this.state.address.city}, ${this.state.address.state} - ${this.state.address.zipcode}` }
            </div>
          </div>
        </div>

        <div className="PeopleFactSheet__section">
          <div className="PeopleFactSheet__section__button--update" />
          <div className="PeopleFactSheet__section__text">
            <div className="PeopleFactSheet__section-label unselectable">Phone Number</div>
            {
              this.state.phoneNumber.map((phoneNumber) => {
                return (
                  <div className="PeopleFactSheet__section-value" key={phoneNumber}>
                    { phoneNumber }
                  </div>
                );
              })
            }
          </div>
        </div>

        <div className="PeopleFactSheet__section">
          <div className="PeopleFactSheet__section__button--update" />
          <div className="PeopleFactSheet__section__text">
            <div className="PeopleFactSheet__section-label unselectable">Email Address</div>
            {
              this.state.emailAddress.map((emailAddress) => {
                return (
                  <div className="PeopleFactSheet__section-value" key={emailAddress}>
                    { emailAddress }
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(PeopleFactSheet);
