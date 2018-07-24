import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PeopleCard.css';
import Profile from '../Profile/Profile';

class PeopleCard extends Component {
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
      isFactSheetVisible: false,
    };
  }

  toggleFactSheetVisibility = (event) => {
    event.preventDefault();
    this.setState({
      isFactSheetVisible: !this.state.isFactSheetVisible,
    });
  }

  render() {
    return (
      <div className="PeopleCard" data-factsheetvisible={this.state.isFactSheetVisible}>
        <div className="PeopleCard__content-holder">
          <div className="PeopleCard__summary">
            <div className="PeopleCard__thumb">
              <div className="photo photo--blur" />
              <div className="photo" />
            </div>
            <div className="PeopleCard__content">
              <div className="PeopleCard__text">
                <div className="PeopleCard__display-name">{this.state.displayName}</div>
                <div className="PeopleCard__other-name">{this.state.otherName}</div>
              </div>
              <div className="PeopleCard__actions">
                <div className="PeopleCard__quick-links">
                  <div className="PeopleCard__quick-link PeopleCard__quick-link--call" />
                  <div className="PeopleCard__quick-link PeopleCard__quick-link--sms" />
                  <div className="PeopleCard__quick-link PeopleCard__quick-link--email" />
                  <div className="PeopleCard__quick-link PeopleCard__quick-link--map" />
                </div>
                <div className="PeopleCard__actions__more-button" onClick={this.toggleFactSheetVisibility}>
                  <div className="PeopleCard__actions__more-button__icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="PeopleCard__factSheet" data-visible={this.state.isFactSheetVisible}>
            <Profile person={this.state.person} />
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

export default connect(mapStateToProps, mapDispatchToProps)(PeopleCard);
