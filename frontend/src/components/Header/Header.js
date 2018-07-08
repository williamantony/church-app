import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';
import MenuIcon from '../MenuIcon/MenuIcon';

class Header extends Component {
  constructor(props) {
    super(props);
    const isAuthenticated = !!localStorage.getItem('token');
    this.state = {
      isAuthenticated,
    };
  }

  render() {
    return (
      <div className="Header" data-authenticated={this.state.isAuthenticated}>
        <div className="Header__bar--dupe" />
        <div className="Header__bar">
          <div className="wrapper">
            <div className="Header__logo" />
            <MenuIcon />
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
