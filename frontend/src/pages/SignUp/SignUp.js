import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../redux/actions';
import './SignUp.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: 'SignUp',
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      ...props.form[this.state.form],
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // this.props.registerUser(this.state);
    console.log(this.state);
  }

  render() {
    return (
      <div className="SignUp">
        <form onSubmit={this.handleSubmit}>

          <Input
            type="email"
            form={this.state.form}
            name="email"
            label="Email Address"
          />
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

          <Button type="submit">Register</Button>
        </form>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  registerUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
