import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal } from '../../../../redux/actions';
import './PeoplesListItem.css';
import Profile from '../../../Profile/Profile';

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

  showProfileInfo = (event) => {
    event.preventDefault();

    const modalId = 'PeoplesListItem__modal';
    const content = <Profile person={this.state.person} />;
    const options = {};

    this.props.showModal(content, modalId, options);
  }

  render() {
    return (
      <div className="PeoplesListItem" onClick={this.showProfileInfo}>
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
