import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setInput, showModal } from '../../redux/actions';
import './Input.css';

/* Input-Type Components */
import CheckBox from './components/CheckBox/CheckBox';
import RadioButton from './components/RadioButton/RadioButton';
import Textbox from './components/Textbox/Textbox';
import Textarea from './components/Textarea/Textarea';
import Select from './components/Select/Select';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type || 'text',
      form: props.form || 'Form',
      name: props.name || '',
      value: props.value || '',
      label: props.label || '',
      options: props.options || [],
      isDisabled: props.disabled || false,
    };
  }

  render() {
    const {
      form, type, label, name, value, options, isDisabled,
    } = this.state;

    return (() => {
      switch (type) {
        case 'textarea':
          return (
            <Textarea
              form={form}
              name={name}
              value={value}
              label={label}
              disabled={isDisabled}
            />
          );

        case 'select':
          return (
            <Select
              form={form}
              name={name}
              value={value}
              label={label}
              options={options}
              disabled={isDisabled}
            />
          );

        case 'checkbox':
          return (
            <CheckBox
              form={form}
              name={name}
              value={value}
              label={label}
              options={options}
              disabled={isDisabled}
            />
          );

        case 'radio':
          return (
            <RadioButton
              form={form}
              name={name}
              value={value}
              label={label}
              options={options}
              disabled={isDisabled}
            />
          );

        default:
          return (
            <Textbox
              type={type}
              form={form}
              name={name}
              value={value}
              label={label}
              disabled={isDisabled}
            />
          );
      }
    })();
  }

}

const mapStateToProps = (state) => {
  return {
    formData: state.form,
  };
};

const mapDispatchToProps = {
  setInput,
  showModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
