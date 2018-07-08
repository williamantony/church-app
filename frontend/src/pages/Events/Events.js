import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Events.css';

class Events extends Component {

  render() {
    return (
      <div className="Events">

      </div>
    );
  }

}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Events);
