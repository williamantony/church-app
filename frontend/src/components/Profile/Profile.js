import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Profile.css';

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
          <div className="ProfileSection__title">Address</div>
          {
            profile.address.map((address) => {
              return (
                <div className="ProfileField" key={address._id} >
                  <div className="ProfileField__title">{ address.type }</div>
                  <div className="ProfileFieldItem">
                    <div className="ProfileFieldItem__row">
                      <div className="ProfileFieldItem__input" />
                      <div className="ProfileFieldItem__input" />
                      <div className="ProfileFieldItem__input" />
                    </div>
                  </div>
                </div>
              );
            })
          }
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
