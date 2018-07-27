import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ProfileEditActions.css';

class ProfileEditActions extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  
  render() {
    return (
      <div className="ProfileEditActions unselectable">
        <div className="ProfileEditActions__button-group" data-type="edit">
          <div className="ProfileEditActions__button" data-type="edit">Edit Profile</div>
        </div>
        <div className="ProfileEditActions__button-group" data-type="save-discard">
          <div className="ProfileEditActions__button" data-type="discard">Discard</div>
          <div className="ProfileEditActions__button" data-type="save">Save</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEditActions);
