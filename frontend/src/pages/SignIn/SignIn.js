import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signin } from '../../redux/actions';
import './SignIn.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: 'SignIn',
      data: {},
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      data: {
        ...props.formData[this.state.form],
      },
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.signin(this.state.data);
  }

  render() {
    return (
      <div className="SignIn">
        <form onSubmit={this.handleSubmit}>

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
              autoComplete="current-password"
            />
          </div>

          <Button type="submit">Login</Button>
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
  signin,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
