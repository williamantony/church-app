import React, { Component } from 'react';
import { connect } from 'react-redux';
import InlineInput from '../../../InlineInput/InlineInput';

class ProfileName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      isReadOnly: false,
    };
  }

  componentWillMount() {
    this.setState({
      name: {
        type: 'Full Name',
        firstname: 'Donald',
        lastname: 'Trump',
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
      name,
      isReadOnly,
    } = this.state;

    return (
      <div className="ProfileSectionInfo">
        <div className="ProfileSectionInfo__label">{ name.type }</div>
        <div className="ProfileSectionInfo__content">
          <div className="ProfileSectionInfo__row">
            <InlineInput
              form="ProfileInputForm"
              name="firstname"
              placeholder="First Name"
              value={name.firstname}
              isReadOnly={isReadOnly}
            />
            <InlineInput
              form="ProfileInputForm"
              name="lastname"
              placeholder="Last Name"
              value={name.lastname}
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileName);
