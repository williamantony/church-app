import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Profile.css';
import ProfileAddress from './components/ProfileAddress/ProfileAddress';
import ProfilePhone from './components/ProfilePhone/ProfilePhone';
import ProfileEmail from './components/ProfileEmail/ProfileEmail';
import ProfileEditActions from './components/ProfileEditActions/ProfileEditActions';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: props.person,
    };
  }

  render() {
    const { profile } = this.state;

    return (
      <div className="Profile">
        <div className="Profile__title">Profile Information</div>
        <div className="ProfileSection">
          <div className="ProfileSection__head">
            <div className="ProfileSection__title">Address</div>
            <div className="ProfileSection__head-button">
              edit
            </div>
          </div>
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
          <div className="ProfileSection__head">
            <div className="ProfileSection__title">Phone Number</div>
            <div className="ProfileSection__head-button">
              edit
            </div>
          </div>
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
          <div className="ProfileSection__head">
            <div className="ProfileSection__title">Email Address</div>
            <div className="ProfileSection__head-button">
              edit
            </div>
          </div>
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
        <ProfileEditActions />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
