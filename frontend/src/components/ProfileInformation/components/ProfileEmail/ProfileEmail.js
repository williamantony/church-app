import React, { Component } from 'react';
import { connect } from 'react-redux';
import InlineInput from '../../../InlineInput/InlineInput';

class ProfileEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: props.email,
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

  render() {
    const { email } = this.state;

    return (
      <div className="ProfileSectionInfo">
        <div className="ProfileSectionInfo__label">{ email.type }</div>
        <div className="ProfileSectionInfo__content">
          <div className="ProfileSectionInfo__row">
            <InlineInput
              form="ProfileInputForm"
              name="emailAddress"
              placeholder="user@domain.com"
              value={email.emailAddress}
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEmail);
