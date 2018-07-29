import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        type: 'Home',
        streetAddress: '1600 Pennsylvania Ave NW',
        addressLine2: '',
        city: 'Washington',
        state: 'DC',
        zipcode: '20500',
        country: 'United States',
      },
    });
  }

  render() {
    const { address } = this.state;

    return (
      <div className="ProfileSectionInfo">
        <div className="ProfileSectionInfo__label">{ address.type }</div>
        <div className="ProfileSectionInfo__content">
          <div className="ProfileSectionInfo__row">
            <InlineInput
              form="ProfileInputForm"
              name="streetAddress"
              placeholder="Street Address"
              value={address.streetAddress}
            />
            <span className="comma">,</span>
          </div>
          <div className="ProfileSectionInfo__row">
            <InlineInput
              form="ProfileInputForm"
              name="addressLine2"
              placeholder="Line 2"
              value={address.addressLine2}
            />
          </div>
          <div className="ProfileSectionInfo__row">
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
          <div className="ProfileSectionInfo__row">
            <InlineInput
              form="ProfileInputForm"
              name="country"
              placeholder="Country"
              value={address.country}
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
