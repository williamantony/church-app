import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setStorageData, setInput } from '../../../../../../redux/actions';
import './SplitFieldInput.css';

class SplitFieldInput extends Component {
  constructor(props) {
    super(props);
    const {
      form, name, field, fields, index,
    } = props;

    const fieldId = `${form}_split-input_${name}`;
    const inputId = `${fieldId}_${index + 1}`;
    const inputName = field.name || (index + 1);

    const length = field.length || {};
    length.min = length.min || 0;
    length.max = length.max || 524288;

    const isLastInput = index === (fields.length - 1);

    this.state = {
      fieldId,
      form,
      name,
      inputId,
      inputName,
      type: field.type || 'text',
      label: field.label,
      length,
      value: '',
      inputField: field.ref,
      nextInputField: (fields[index + 1] || {}).ref,
      status: {
        isFocused: false,
        isFilled: false,
        isDisabled: field.disabled || false,
        isLastInput,
      },
    };
  }

  componentWillReceiveProps(props) {
    const { fieldId, inputName, value } = this.state;
    const storageData = props.storage['_Input'][fieldId];
    this.setState({
      value: storageData[inputName] || value,
    });
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

    const {
      length, nextInputField, fieldId, inputName, status,
      form, name,
    } = this.state;
    const { value } = event.target;

    if (value.length === length.max) {
      const newValue = {
        ...this.props.storage['_Input'][fieldId],
        [inputName]: value,
      };

      this.props.setStorageData(newValue, '_Input', fieldId);

      if (status.isLastInput) {
        this.props.setInput(form, name, Object.values(newValue).join(''));
      }

      if (nextInputField) {
        nextInputField.current.focus();
      }
    } else if (value.length < length.max) {
      this.setState({ value });
    }
  }

  render() {
    const {
      inputId, type, inputName, label, value, status, inputField,
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
              ? <label className="Input__label" htmlFor={inputId}>{label}</label>
              : null
          }
          <div className="Input__layer Input__layer-box" />
          <div className="Input__input-container">
            <input
              className="Input__input-field"
              type={type}
              id={inputId}
              ref={inputField}
              name={inputName}
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
  return {
    storage: state.storage,
  };
};

const mapDispatchToProps = {
  setStorageData,
  setInput,
};

export default connect(mapStateToProps, mapDispatchToProps)(SplitFieldInput);
