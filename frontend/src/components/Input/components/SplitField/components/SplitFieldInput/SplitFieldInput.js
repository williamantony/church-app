import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SplitFieldInput.css';

class SplitFieldInput extends Component {
  constructor(props) {
    super(props);

    const length = props.length || {};
    length.min = length.min || 0;
    length.max = length.max || 524288;
    
    this.state = {
      inputField: props.reference,
      nextInputField: (props.nextInputField || {}).ref,
      id: props.id,
      form: props.form,
      name: props.name,
      type: props.type || 'text',
      label: props.label,
      length,
      value: '',
      status: {
        isFocused: false,
        isFilled: false,
        isDisabled: props.disabled,
      },
    };
  }

  handleClick = () => {
    this.handleFocus();
    this.state.inputField.current.focus();
  }

  handleFocus = () => {
    this.setState({
      status: {
        ...this.state.status,
        isFocused: true,
      },
    });
  }

  handleBlur = () => {
    this.setState({
      status: {
        ...this.state.status,
        isFocused: false,
        isFilled: this.state.value !== '',
      },
    });
  }

  handleInput = (event) => {
    event.preventDefault();
    const { value } = event.target;
    const { length, nextInputField } = this.state;
    if (value.length <= length.max) {
      this.setState({ value });
    }
    if (nextInputField && (value.length === length.max)) {
      this.state.nextInputField.current.focus();
    }
  }

  render() {
    const {
      fieldId, type, name, label, value, status, inputField,
    } = this.state;

    const { isFocused, isFilled, isDisabled } = status;

    return (
      <div
        className="Input"
        data-focused={isFocused}
        data-filled={isFilled}
        data-disabled={isDisabled}
        data-input-type={type}
        data-split-field="true"
        data-has-label={label !== undefined}
      >
        <div className="Input__area" onClick={this.handleClick}>
          {
            (label)
              ? <label className="Input__label" htmlFor={fieldId}>{label}</label>
              : null
          }
          <div className="Input__layer Input__layer-box" />
          <div className="Input__input-container">
            <input
              className="Input__input-field"
              type={type}
              id={fieldId}
              ref={inputField}
              name={name}
              value={value}
              disabled={isDisabled}
              onChange={this.handleInput}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(SplitFieldInput);
