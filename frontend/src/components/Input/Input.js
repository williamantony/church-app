import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setInput, showModal } from '../../redux/actions';
import './Input.css';
import InputSelector from '../InputSelector/InputSelector';
import CheckBox from '../CheckBox/CheckBox';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: props.form || 'Form',
      fieldId: `${props.form}_${props.type}_${props.name}`,
      type: props.type || 'text',
      label: props.label || '',
      name: props.name || '',
      value: props.value || '',
      options: props.options || [],
      status: {
        isFocused: false,
        isFilled: false,
        isDisabled: props.disabled || (props.type === 'select'),
      },
    };
  }

  componentWillMount() {
    this.setState({
      status: {
        ...this.state.status,
        isFilled: this.state.value !== '',
      },
    });
  }

  componentWillReceiveProps(props) {
    const { form, name } = this.state;
    const formData = props.formData[form] || {};
    const value = formData[name] || '';
    this.setState({
      value,
      status: {
        ...this.state.status,
        isFilled: value !== '',
      },
    });
  }

  handleInput = (event) => {
    event.preventDefault();
    const { form, name } = this.state;
    const { value } = event.target;
    this.props.setInput(form, name, value);
  }

  handleFocus = () => {
    if (!this.state.status.isDisabled) {
      this.setState({
        status: {
          ...this.state.status,
          isFocused: true,
        },
      });
    }
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

  handleClick = (event) => {
    if (!new RegExp(/^select|checkbox|radio$/gi).test(this.state.type)) {
      this.handleFocus(event);
      document.getElementById(this.state.fieldId).focus();
    }
  }

  showOptions = () => {
    const { form, name, label, options } = this.state;
    const selectorOptions = (
      <InputSelector
        form={form}
        name={name}
        label={label}
        options={options}
      />
    );
    this.props.showModal('InputSelectorModal', selectorOptions);
  }

  showOptionsOnEnter = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.showOptions();
    }
  }

  render() {
    const { form, fieldId, type, label, name, value, options } = this.state;
    const { isFilled, isFocused, isDisabled } = this.state.status;
    return (
      <div
        className="Input"
        data-focused={isFocused}
        data-filled={isFilled}
        data-disabled={isDisabled}
        data-input-type={type}
      >
        <div className="Input__area" onClick={this.handleClick}>
          {
            (!new RegExp(/^checkbox|radio$/gi).test(type))
              ? (
                <div>
                  <label className="Input__label" htmlFor={fieldId}>{label}</label>
                  <div className="Input__layer Input__layer-box" />
                </div>
              ) : null
          }
          <div className="Input__input-container">
            {
              (() => {
                switch(type) {
                  case 'textarea':
                    return (
                      <textarea
                        className="Input__input-field"
                        type={type}
                        id={fieldId}
                        name={name}
                        value={value}
                        disabled={isDisabled}
                        onChange={this.handleInput}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                      ></textarea>
                    );
                  
                  case 'select':
                    return (
                      <input
                        className="Input__input-field"
                        type="text"
                        id={fieldId}
                        name={name}
                        value={value}
                        readOnly={true}
                        onChange={this.handleInput}
                        onClick={this.showOptions}
                        onKeyDown={this.showOptionsOnEnter}
                      />
                    );
                  
                  case 'checkbox':
                    return (
                      <CheckBox
                        form={form}
                        name={name}
                        label={label}
                        options={options}
                      />
                    );
                  
                  case 'radio':
                    return (
                      <CheckBox
                        type="radio"
                        form={form}
                        name={name}
                        label={label}
                        options={options}
                      />
                    );

                  default:
                    return (
                      <input
                        className="Input__input-field"
                        type={type}
                        id={fieldId}
                        name={name}
                        value={value}
                        disabled={isDisabled}
                        onChange={this.handleInput}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                      />
                    );
                }
              })()
            }
          </div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    formData: state.form,
  };
};

const mapDispatchToProps = {
  setInput,
  showModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
