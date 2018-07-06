import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal } from '../../redux/actions';
import './Notification.css';

class Notification extends Component {

  componentWillReceiveProps(props) {
    const {
      type,
      title,
      message,
    } = props.notification;

    const notification = this.renderNotification(message);
    const modalOptions = {
      type,
      title,
    };
    this.props.showModal(notification, null, modalOptions);
  }

  renderNotification = (message) => {
    return (
      <div className="Notification">
        <div className="Notification__message">{message}</div>
      </div>
    );
  }

  render() {
    return null;
  }

}

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
  };
};

const mapDispatchToProps = {
  showModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
