import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../redux/actions';
import './SignUp.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

class SignUp extends Component {
  constructor(props) {
    super(props);
    const { token } = props.match.params;
    this.state = {
      form: 'SignUp',
      data: {
        personId: token,
      },
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      data: {
        ...this.state.data,
        ...props.formData[this.state.form],
      },
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.registerUser(this.state.data);
  }

  render() {
    return (
      <div className="SignUp">
        <form onSubmit={this.handleSubmit}>

          <div className="InputGroup">
            <Input
              type="email"
              form={this.state.form}
              name="email"
              label="Email Address"
              autoComplete="email"
            />
          </div>
          <div className="InputGroup">
            <Input
              type="text"
              form={this.state.form}
              name="username"
              label="Username"
              autoComplete="username"
            />
            <Input
              type="password"
              form={this.state.form}
              name="password"
              label="Password"
              autoComplete="new-password"
            />
          </div>

          <Button type="submit">Register</Button>
        </form>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    formData: state.form,
  };
};

const mapDispatchToProps = {
  registerUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
