import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PeopleCard.css';
import Button from '../Button/Button';

class PeopleCard extends Component {

  render() {
    return (
      <div className="PeopleCard">
        <div className="PeopleCard__summary">
          <div className="PeopleCard__thumb" />
          <div className="PeopleCard__content">
            <div className="PeopleCard__text">
              <div className="PeopleCard__display-name">Antony Pathadan</div>
              <div className="PeopleCard__other-name">Tony</div>
            </div>
            <div className="PeopleCard__actions">
              <div className="PeopleCard__quick-links">
                <div className="PeopleCard__quick-link PeopleCard__quick-link--call"></div>
                <div className="PeopleCard__quick-link PeopleCard__quick-link--message"></div>
                <div className="PeopleCard__quick-link PeopleCard__quick-link--directions"></div>
              </div>
              <div className="PeopleCard__more-button">More Details</div>
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
