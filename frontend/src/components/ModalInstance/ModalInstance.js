import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal, hideModal, destroyModal } from '../../redux/actions';
import './ModalInstance.css';

class ModalInstance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      title: null,
      content: null,
      isVisible: false,
      color: {
        bg: 'rgba(0, 0, 0, 0.5)',
      },
    };
  }

  componentWillMount() {
    const modal = this.props.modals[this.state.id];
    this.setState({
      title: modal.title || null,
      content: modal.content || null,
    });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isVisible: true,
      });
    }, 10);
  }

  componentWillReceiveProps(props) {
    const modal = props.modals[this.state.id];
    this.setState({
      isVisible: modal.isVisible,
    });
    if (!modal.isVisible) {
      setTimeout(() => {
        this.props.destroyModal(this.state.id);
      }, 500);
    }
  }

  hideModal = () => {
    this.props.hideModal(this.state.id);
  }

  render() {
    const {
      isVisible, content, title, color,
    } = this.state;

    return (
      <div className="Modal" data-visible={isVisible} data-type={'InputSelector'}>
        <div className="Modal__bg" style={{ backgroundColor: color.bg }} onClick={this.hideModal} />
        <div className="Modal__content">
          <div className="Modal__content__box">
            <div className="Modal__header">
              <div className="Modal__header__title">{title}</div>
              <div className="Modal__close-button" onClick={this.hideModal}>
                <div className="icon">
                  <div className="line" />
                  <div className="line" />
                </div>
              </div>
            </div>
            { content }
          </div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return state.modal;
};

const mapDispatchToProps = {
  showModal,
  hideModal,
  destroyModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalInstance);
