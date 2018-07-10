import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PeopleCard.css';

class PeopleCard extends Component {
  constructor(props) {
    super(props);

    const {
      firstname,
      lastname,
      otherName,
    } = props.person;

    this.state = {
      displayName: `${firstname || ''} ${lastname || ''}`.trim(),
      otherName,
    };
  }

  render() {
    return (
      <div className="PeopleCard">
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
                  <div className="PeopleCard__quick-link PeopleCard__quick-link--call"></div>
                  <div className="PeopleCard__quick-link PeopleCard__quick-link--sms"></div>
                  <div className="PeopleCard__quick-link PeopleCard__quick-link--email"></div>
                  <div className="PeopleCard__quick-link PeopleCard__quick-link--map"></div>
                </div>
              </div>
              <div className="PeopleCard__more-button">See Contact Details</div>
            </div>
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
