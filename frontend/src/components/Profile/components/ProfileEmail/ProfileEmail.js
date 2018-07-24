import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ProfileEmail.css';
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
        emailAddress: 'email@whitehouse.gov',
      },
    });
  }

  render() {
    const { email } = this.state;

    return (
      <div className="ProfileEmail">
        <div className="ProfileEmail__title">{ email.type }</div>
        <div className="ProfileEmailItem">
          <div className="ProfileEmailItem__row">
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
