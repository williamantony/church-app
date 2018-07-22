import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ProfileAddress.css';
import InlineInput from '../../../InlineInput/InlineInput';

class ProfileAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: props.address,
    };
  }

  componentWillMount() {
    this.setState({
      address: {
        type: 'home',
        streetAddress: '5721 N Kostner Ave',
        addressLine2: '',
        city: 'Chicago',
        state: 'IL',
        zipcode: '60646',
      },
    });
  }

  render() {
    const { address } = this.state;

    return (
      <div className="ProfileAddress">
        <div className="ProfileAddress__title">{ address.type }</div>
        <div className="ProfileAddressItem">
          <div className="ProfileAddressItem__row">
            <InlineInput
              form="ProfileInputForm"
              name="streetAddress"
              placeholder="Street Address"
              value={address.streetAddress}
            />
            <span className="comma">,</span>
          </div>
          <div className="ProfileAddressItem__row">
            <InlineInput
              form="ProfileInputForm"
              name="addressLine2"
              placeholder="Line 2"
              value={address.addressLine2}
            />
          </div>
          <div className="ProfileAddressItem__row">
            <InlineInput
              form="ProfileInputForm"
              name="city"
              placeholder="City"
              value={address.city}
            />
            <span className="comma">,</span>
            <InlineInput
              form="ProfileInputForm"
              name="state"
              placeholder="State"
              value={address.state}
            />
            <span className="hyphen">-</span>
            <InlineInput
              form="ProfileInputForm"
              name="zipcode"
              placeholder="Zip Code"
              value={address.zipcode}
              maxLength={6}
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileAddress);
