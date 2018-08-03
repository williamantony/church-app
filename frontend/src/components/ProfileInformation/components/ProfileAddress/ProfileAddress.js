import React, { Component } from 'react';
import { connect } from 'react-redux';
import InlineInput from '../../../InlineInput/InlineInput';

class ProfileAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: props.address,
      isReadOnly: false,
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

  componentWillReceiveProps(props) {
    this.setState({
      isReadOnly: !props.profileInfo.isEditing,
    });
  }

  render() {
    const {
      address,
      isReadOnly,
    } = this.state;

    return (
      <div className="ProfileSectionInfo">
        <div className="ProfileSectionInfo__label">{ address.type }</div>
        <div className="ProfileSectionInfo__content">
          <div className="ProfileSectionInfo__row" data-single-input="true">
            <InlineInput
              form="ProfileInputForm"
              name={`streetAddress_${address.type}`}
              placeholder="Street Address"
              value={address.streetAddress}
              isReadOnly={isReadOnly}
            />
            <span className="comma">,</span>
          </div>
          <div className="ProfileSectionInfo__row" data-single-input="true">
            <InlineInput
              form="ProfileInputForm"
              name={`addressLine2_${address.type}`}
              placeholder="Line 2"
              value={address.addressLine2}
              isReadOnly={isReadOnly}
            />
          </div>
          <div className="ProfileSectionInfo__row">
            <InlineInput
              form="ProfileInputForm"
              name={`city_${address.type}`}
              placeholder="City"
              value={address.city}
              isReadOnly={isReadOnly}
            />
            <span className="comma">,</span>
            <InlineInput
              form="ProfileInputForm"
              name={`state_${address.type}`}
              placeholder="State"
              value={address.state}
              isReadOnly={isReadOnly}
            />
            <span className="hyphen">-</span>
            <InlineInput
              form="ProfileInputForm"
              name={`zipcode_${address.type}`}
              placeholder="Zip Code"
              value={address.zipcode}
              isReadOnly={isReadOnly}
              maxLength={6}
            />
          </div>
          <div className="ProfileSectionInfo__row" data-single-input="true">
            <InlineInput
              form="ProfileInputForm"
              name={`country_${address.type}`}
              placeholder="Country"
              value={address.country}
              isReadOnly={isReadOnly}
            />
          </div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    profileInfo: state.profileInfo,
  };
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileAddress);
