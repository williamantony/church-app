import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal } from '../../redux/actions';
import './Notification.css';

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: null,
      title: null,
      message: null,
    };
  }

  componentWillMount() {
    this.setState({
      ...this.props.notification,
    });
  }

  componentWillReceiveProps(props) {
    const {
      type,
      title,
      message,
    } = props.notification;

    const notification = this.renderNotification();
    const modalOptions = {
      type,
      title,
    };
    this.props.showModal(notification, null, modalOptions);

    this.setState({
      message,
    });
  }

  renderNotification = () => {
    return (
      <div className="Notification">
        <div className="Notification__message">{this.state.message}</div>
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
