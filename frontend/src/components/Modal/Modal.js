import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../../redux/actions';
import './Modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type || 'general',
      name: props.name || Date.now(),
      isVisible: props.isVisible || false,
      content: props.content || null,
      color: {
        bg: 'rgba(0, 0, 0, 0.75)',
      },
    };
  }

  componentWillReceiveProps(props) {
    const modal = props[this.state.name];
    this.setState({ ...modal });
    setTimeout(() => {
      if (modal && !modal.isVisible) {
        this.setState({ content: null });
      }
    }, 250);
  }

  hideModal = () => {
    this.props.hideModal(this.state.name);
  }

  render() {
    const {
      isVisible, type, content, color,
    } = this.state;

    return (
      <div className="Modal" data-visible={isVisible} data-type={type}>
        <div className="Modal__bg" style={{ backgroundColor: color.bg }} onClick={this.hideModal} />
        <div className="Modal__content">
          <div className="Modal__content__box">{ content }</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.modal;
};

const mapDispatchToProps = {
  hideModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
