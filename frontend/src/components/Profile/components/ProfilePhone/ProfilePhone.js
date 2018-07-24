import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ProfilePhone.css';
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
        type: 'Residential',
        countryCode: '+1',
        number: '8888888888',
      },
    });
  }

  render() {
    const { phone } = this.state;

    return (
      <div className="ProfilePhone">
        <div className="ProfilePhone__title">{ phone.type }</div>
        <div className="ProfilePhoneItem">
          <div className="ProfilePhoneItem__row">
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
