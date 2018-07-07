import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MenuIcon.css';

class MenuIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
    };
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      opened: !this.state.opened,
    });
  }

  render() {
    return (
      <div
        className="MenuIcon"
        onClick={this.handleClick}
      >
        <div
          className="icon"
          data-open={this.state.opened}
        >
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(MenuIcon);
