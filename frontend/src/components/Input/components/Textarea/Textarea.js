import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setInput } from '../../../../redux/actions';

class Textarea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputField: React.createRef(),
      fieldId: `${props.form}_textarea_${props.name}`,
      form: props.form || 'Form',
      name: props.name,
      label: props.label || '',
      value: props.value || '',
      status: {
        isFocused: false,
        isFilled: false,
        isDisabled: props.disabled,
      },
    };
  }

  componentWillReceiveProps(props) {
    const { form, name } = this.state;

    this.setState({
      value: props.formData[form][name] || '',
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
    const { form, name } = this.state;
    const { value } = event.target;
    this.props.setInput(form, name, value);
  }

  render() {
    const {
      fieldId, name, label, value, status, inputField,
    } = this.state;

    const { isFocused, isFilled, isDisabled } = status;

    return (
      <div
        className="Input"
        data-focused={isFocused}
        data-filled={isFilled}
        data-disabled={isDisabled}
        data-input-type="textarea"
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
            <textarea
              className="Input__input-field"
              type="textarea"
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
  return {
    formData: state.form,
  };
};

const mapDispatchToProps = {
  setInput,
};

export default connect(mapStateToProps, mapDispatchToProps)(Textarea);
