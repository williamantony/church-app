import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createForm, showModal } from '../../redux/actions';
import './Input.css';

/* Input-Type Components */
import CheckBox from './components/CheckBox/CheckBox';
import RadioButton from './components/RadioButton/RadioButton';
import Textbox from './components/Textbox/Textbox';
import Textarea from './components/Textarea/Textarea';
import Select from './components/Select/Select';
import DateSelect from './components/DateSelect/DateSelect';
import SplitField from './components/SplitField/SplitField';

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
      fields: props.fields || [],
      isDisabled: props.disabled || false,
      onSelect: props.onSelect,
    };
  }

  componentWillMount() {
    this.props.createForm(this.state.form);
  }

  render() {
    const {
      form, type, label, name, value, options, fields, isDisabled, onSelect,
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
              onSelect={onSelect}
            />
          );

        case 'date':
          return (
            <DateSelect
              form={form}
              name={name}
              value={value}
              label={label}
              options={options}
              disabled={isDisabled}
              onSelect={onSelect}
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

        case 'split':
          return (
            <SplitField
              form={form}
              name={name}
              label={label}
              fields={fields}
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
  createForm,
  showModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
