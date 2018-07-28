import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal } from '../../../../redux/actions';
import './PeoplesListItem.css';
import PeopleCard from '../../../PeopleCard/PeopleCard';

class PeoplesListItem extends Component {
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
    };
  }

  showPeopleCard = (event) => {
    event.preventDefault();

    const modalId = 'PeoplesListItem__modal';
    const content = <PeopleCard person={this.state.person} />;
    const options = {
      title: 'Profile Information',
    };

    this.props.showModal(content, modalId, options);
  }

  render() {
    return (
      <div className="PeoplesListItem" onClick={this.showPeopleCard}>
        <div className="PeoplesListItem__summary">
          <div className="PeoplesListItem__name">{ this.state.displayName }</div>
          <div className="PeoplesListItem__subtext">{ this.state.otherName }</div>
        </div>
        <div className="PeoplesListItem__icon" />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  showModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(PeoplesListItem);
