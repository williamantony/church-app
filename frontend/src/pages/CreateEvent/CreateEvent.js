import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CreateEvent.css';

class CreateEvent extends Component {

  render() {
    return (
      <div className="CreateEvent">

      </div>
    );
  }

}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
