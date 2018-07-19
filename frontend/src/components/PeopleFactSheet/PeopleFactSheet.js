import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PeopleFactSheet.css';
import PeopleFactSection from './components/PeopleFactSection/PeopleFactSection';

class PeopleFactSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: [
        {
          _id: '464647679796446465',
          _label: 'Home',
          streetAddress: '5000 N Avers Ave',
          city: 'Chicago',
          state: 'IL',
          zipcode: '60000',
        },
        {
          _id: '4646476797964446465',
          _label: 'Work',
          streetAddress: '5000 N Washington Ave',
          city: 'Chicago',
          state: 'IL',
          zipcode: '60000',
        },
      ],
      phoneNumber: [
        {
          _id: '676434134464131671',
          number: '+1 (888) 888-8888',
        },
        {
          _id: '44646464613189495',
          number: '+1 (888) 888-8888',
        },
      ],
      emailAddress: [
        {
          _id: '67643413446413167',
          emailAddress: 'email@williamantony.com',
        },
        {
          _id: '6764341344641167',
          emailAddress: 'email@williamantony.com',
        },
      ],
    };
  }

  render() {
    return (
      <div className="PeopleFactSheet">
        <div className="PeopleFactSheet__title unselectable">Profile Information</div>

        <PeopleFactSection
          title="Address"
          data={this.state.address}
          fieldSchema={[
            [
              {
                name: 'streetAddress',
                placeholder: 'Street Address',
              },
            ],
            [
              {
                name: 'city',
                placeholder: 'City',
              },
              {
                name: 'state',
                placeholder: 'State',
              },
              {
                name: 'zipcode',
                placeholder: 'Zipcode',
              },
            ],
          ]}
        />

        <PeopleFactSection
          title="Phone Number"
          data={this.state.phoneNumber}
          fieldSchema={[
            [
              {
                name: 'number',
                placeholder: 'Phone Number',
              },
            ],
          ]}
        />

        <PeopleFactSection
          title="Email Address"
          data={this.state.emailAddress}
          fieldSchema={[
            [
              {
                name: 'emailAddress',
                placeholder: 'Email Address',
              },
            ],
          ]}
        />

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
