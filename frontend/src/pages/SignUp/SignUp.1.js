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
            type="textarea"
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
          <Input
            type="select"
            form={this.state.form}
            name="country"
            label="Country"
            options={[
              {
                label: 'United States',
                value: 'usa',
              },
              {
                label: 'India',
                value: 'india',
              },
            ]}
          />
          <Input
            type="checkbox"
            form={this.state.form}
            name="gender"
            label="Choose your gender"
            options={[
              {
                name: 'male',
                label: 'Male',
                value: 'male',
              },
              {
                name: 'female',
                label: 'Female',
                value: 'female',
              },
            ]}
          />
          <Input
            type="radio"
            form={this.state.form}
            name="gender1"
            label="Choose your gender"
            options={[
              {
                name: 'male',
                label: 'Male',
                value: 'male',
              },
              {
                name: 'female',
                label: 'Female',
                value: 'female',
              },
            ]}
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
