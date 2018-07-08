import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CreatePerson.css';

class CreatePerson extends Component {

  render() {
    return (
      <div className="CreatePerson">

      </div>
    );
  }

}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePerson);
