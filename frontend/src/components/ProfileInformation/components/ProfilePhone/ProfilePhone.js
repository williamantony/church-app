import React, { Component } from 'react';
import { connect } from 'react-redux';
import InlineInput from '../../../InlineInput/InlineInput';

class ProfilePhone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: props.phone,
      isReadOnly: false,
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

  componentWillReceiveProps(props) {
    this.setState({
      isReadOnly: !props.profileInfo.isEditing,
    });
  }

  render() {
    const {
      phone,
      isReadOnly,
    } = this.state;

    return (
      <div className="ProfileSectionInfo">
        <div className="ProfileSectionInfo__label">{ phone.type }</div>
        <div className="ProfileSectionInfo__content">
          <div className="ProfileSectionInfo__row">
            <InlineInput
              form="ProfileInputForm"
              name={`countryCode_${phone.type}`}
              placeholder="+1"
              value={phone.countryCode}
              isReadOnly={isReadOnly}
            />
            <InlineInput
              form="ProfileInputForm"
              name={`number_${phone.type}`}
              placeholder="(000) 000-0000"
              value={phone.number}
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePhone);
