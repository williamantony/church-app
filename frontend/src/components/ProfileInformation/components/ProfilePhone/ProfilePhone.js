import React, { Component } from 'react';
import { connect } from 'react-redux';
import InlineInput from '../../../InlineInput/InlineInput';

class ProfilePhone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: props.phone,
    };
  }

  componentWillMount() {
    this.setState({
      phone: {
        type: 'primary',
        countryCode: '+1',
        number: '8888888888',
      },
    });
  }

  render() {
    const { phone } = this.state;

    return (
      <div className="ProfileSectionInfo">
        <div className="ProfileSectionInfo__label">{ phone.type }</div>
        <div className="ProfileSectionInfo__content">
          <div className="ProfileSectionInfo__row">
            <InlineInput
              form="ProfileInputForm"
              name="countryCode"
              placeholder="+1"
              value={phone.countryCode}
            />
            <InlineInput
              form="ProfileInputForm"
              name="number"
              placeholder="(000) 000-0000"
              value={phone.number}
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePhone);
