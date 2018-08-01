import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setProfileInfoOptions } from '../../redux/actions';
import './Profile.css';
import ProfileInformation from '../ProfileInformation/ProfileInformation';

class Profile extends Component {
  constructor(props) {
    super(props);

    const {
      firstname,
      lastname,
      otherName,
    } = props.person;

    this.state = {
      person: props.person,
      displayName: `${firstname || ''} ${lastname || ''}`.trim(),
      otherName,
      status: {
        isAuthUser: true,
        isVisible: false,
        isEditing: false,
      },
    };
  }

  componentWillReceiveProps(props) {
    const {
      isVisible,
      isEditing,
    } = props.profileInfo;

    this.setState({
      ...this.state,
      status: {
        ...this.state.status,
        isVisible,
        isEditing,
      },
    });
  }

  startEditing = () => {
    this.props.setProfileInfoOptions({
      isEditing: true,
    });
  }

  stopEditing = () => {
    this.props.setProfileInfoOptions({
      isEditing: false,
    });
  }

  render() {
    const {
      isAuthUser,
      isVisible,
      isEditing,
    } = this.state.status;

    return (
      <div className="Profile">
        <div className="Profile__content">
          <div className="Profile__summary">
            <div className="Profile__text">
              <div className="Profile__display-name">{this.state.displayName}</div>
              <div className="Profile__other-name">{this.state.otherName}</div>
            </div>
            <div className="Profile__actions unselectable">
              <div
                className="Profile__actions-layer"
                data-when="default"
                data-visible={!isEditing}
              >
                <div className="Profile__actions-layer__content">
                  <div className="Profile__quick-links">
                    <div className="Profile__quick-link" data-type="call">
                      <div className="holder">
                        <div className="icon" />
                        <div className="text">Call</div>
                      </div>
                    </div>
                    <div className="Profile__quick-link" data-type="map">
                      <div className="holder">
                        <div className="icon" />
                        <div className="text">Direction</div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="Profile__quick-button"
                    data-type="edit"
                    data-visible={isVisible}
                    onClick={this.startEditing}
                  >
                    <div className="text">Edit</div>
                  </div>
                </div>
              </div>

              <div
                className="Profile__actions-layer"
                data-when="editing"
                data-visible={isVisible && isAuthUser && isEditing}
              >
                <div className="Profile__actions-layer__content">
                  <div className="Profile__quick-button" data-type="save" onClick={this.stopEditing}>
                    <div className="text">Save</div>
                  </div>
                  <div className="Profile__quick-button" data-type="discard" onClick={this.stopEditing}>
                    <div className="icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProfileInformation person={this.state.person} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
