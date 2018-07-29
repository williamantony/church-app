import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setProfileInfoVisibility } from '../../redux/actions';
import './ProfileInformation.css';
import ProfileAddress from './components/ProfileAddress/ProfileAddress';
import ProfilePhone from './components/ProfilePhone/ProfilePhone';
import ProfileEmail from './components/ProfileEmail/ProfileEmail';

class ProfileInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: props.person,
      isInformationVisible: false,
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      isInformationVisible: props.profileInfo.isVisible,
    });
  }

  componentWillUnmount() {
    if (this.state.isInformationVisible) {
      this.props.setProfileInfoVisibility(false);
    }
  }

  toggleInformationVisibility = (event) => {
    event.preventDefault();
    this.props.setProfileInfoVisibility(!this.state.isInformationVisible);
  }

  render() {
    const {
      profile,
      isInformationVisible,
    } = this.state;

    return (
      <div className="ProfileInformation">
        <div
          className="ProfileInformation__toggle-button unselectable"
          data-information-visible={isInformationVisible}
          onClick={this.toggleInformationVisibility}
        >
          See Details
        </div>
        <div className="ProfileInformationSections" data-visible={isInformationVisible}>
          <div className="ProfileInformation__title">Profile information</div>
          <div className="ProfileSection">
            <div className="ProfileSection__title">Address</div>
            {
              profile.address.map((address) => {
                return <ProfileAddress key={address._id} address={address} />;
              })
            }
            {
              // This is only for demo
              [0].map((address, index) => {
                return <ProfileAddress key={address._id + index} address={address} />;
              })
            }
          </div>

          <div className="ProfileSection">
            <div className="ProfileSection__title">Phone Number</div>
            {
              profile.phone.map((phone) => {
                return <ProfilePhone key={phone._id} phone={phone} />;
              })
            }
            {
              // This is only for demo
              [0].map((phone, index) => {
                return <ProfilePhone key={phone._id + index} phone={phone} />;
              })
            }
          </div>

          <div className="ProfileSection">
            <div className="ProfileSection__title">Email Address</div>
            {
              profile.emailAddress.map((email) => {
                return <ProfileEmail key={email._id} email={email} />;
              })
            }
            {
              // This is only for demo
              [0].map((email, index) => {
                return <ProfileEmail key={email._id + index} email={email} />;
              })
            }
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
  setProfileInfoVisibility,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInformation);
