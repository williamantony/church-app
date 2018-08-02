import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setProfileInfoOptions } from '../../redux/actions';
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
      isEditing: false,
    };
  }

  componentWillReceiveProps(props) {
    const {
      isVisible,
      isEditing,
    } = props.profileInfo;

    this.setState({
      isInformationVisible: isVisible,
      isEditing,
    });
  }

  componentWillUnmount() {
    if (this.state.isInformationVisible) {
      this.props.setProfileInfoOptions({
        isVisible: false,
        isEditing: false,
      });
    }
  }

  toggleInformationVisibility = (event) => {
    event.preventDefault();
    this.props.setProfileInfoOptions({
      isVisible: !this.state.isInformationVisible,
    });
  }

  render() {
    const {
      profile,
      isInformationVisible,
      isEditing,
    } = this.state;

    return (
      <div className="ProfileInformation unselectable">
        <div
          className="ProfileInformation__toggle-button"
          data-information-visible={isInformationVisible}
          onClick={this.toggleInformationVisibility}
        >
          <div className="text">See Details</div>
        </div>
        <div className="ProfileInformationSections" data-visible={isInformationVisible}>
          <div className="ProfileInformation__edit-mode" data-editable={isEditing}>
            <div className="text">Editing Mode</div>
          </div>
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
  setProfileInfoOptions,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInformation);
