import React, { Component } from 'react';
import { connect } from 'react-redux';
import InlineInput from '../../../InlineInput/InlineInput';

class ProfileEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: props.email,
      isReadOnly: false,
    };
  }

  componentWillMount() {
    this.setState({
      email: {
        type: 'primary',
        emailAddress: 'email@whitehouse.gov',
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
      email,
      isReadOnly,
    } = this.state;

    return (
      <div className="ProfileSectionInfo">
        <div className="ProfileSectionInfo__label">{ email.type }</div>
        <div className="ProfileSectionInfo__content">
          <div className="ProfileSectionInfo__row">
            <InlineInput
              form="ProfileInputForm"
              name={`emailAddress_${email.type}`}
              placeholder="user@example.com"
              value={email.emailAddress}
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEmail);
