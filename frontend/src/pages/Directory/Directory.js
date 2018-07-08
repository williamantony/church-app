import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Directory.css';

class Directory extends Component {

  render() {
    return (
      <div className="Directory">

      </div>
    );
  }

}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Directory);
