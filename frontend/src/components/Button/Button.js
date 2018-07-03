import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type || 'button',
      color: props.color || 'blue',
      icon: props.icon,
      text: props.text || '',
      circle: {
        top: 0,
        left: 0,
      },
      clicked: false,
    };
  }

  handleMouseDown = (event) => {
    const rect = event.target.getBoundingClientRect();
    const top = event.clientY - rect.top - (rect.height / 2);
    const left = event.clientX - rect.left - (rect.width / 2);
    this.setState({
      circle: {
        top,
        left,
      },
      clicked: true,
    });
    setTimeout(() => {
      this.setState({ clicked: false });
    }, 500);
  }

  render() {
    return (
      <button
        type={this.state.type}
        className={`Button ${this.state.clicked ? 'Button--clicked' : ''}`}
        onMouseDown={this.handleMouseDown}
      >
        <div className="Button__circle" style={this.state.circle}>
          <div className="circle" />
          <div className="circle" />
        </div>
        <div className="Button__content">
          {this.props.children}
        </div>
      </button>
    );
  }

}

export default Button;
