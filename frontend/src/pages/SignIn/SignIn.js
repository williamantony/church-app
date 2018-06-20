import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SignIn.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: 'SignIn',
    };
  }

  render() {
    return (
      <div className="SignIn">
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            form={this.state.form}
            name="username"
            label="Username"
          />
          <Input
            type="password"
            form={this.state.form}
            name="password"
            label="Password"
          />

          <Button type="submit">Login</Button>
        </form>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
