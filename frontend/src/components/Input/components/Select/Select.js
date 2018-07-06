import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setInput, showModal } from '../../../../redux/actions';
import InputSelector from './components/InputSelector/InputSelector';

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputField: React.createRef(),
      fieldId: `${props.form}_${props.type || 'text'}_${props.name}`,
      form: props.form || 'Form',
      name: props.name,
      label: props.label || '',
      value: props.value || '',
      options: props.options || [],
      onSelect: props.onSelect,
      status: {
        isFocused: false,
        isFilled: false,
        isDisabled: props.disabled,
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
    const { form, name, options } = this.state;
    const value = props.formData[form][name] || '';

    const currentOption = options.find(option => option.value === value) || {};

    this.setState({
      value: currentOption.label || '',
      status: {
        ...this.state.status,
        isFilled: value !== '',
      },
    });
  }

  handleClick = () => {
    this.handleFocus();
    this.state.inputField.current.blur();
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

  showOptions = () => {
    const {
      form, name, label, options, onSelect,
    } = this.state;

    const modalId = `modal_${new Date().getTime()}`;

    const selectorOptions = (
      <InputSelector
        form={form}
        name={name}
        label={label}
        options={options}
        onSelect={onSelect}
        modalId={modalId}
      />
    );

    const modalOptions = {
      type: 'INPUT',
      title: label,
    };

    this.props.showModal(selectorOptions, modalId, modalOptions);
  }

  showOptionsOnKeyDown = (event) => {
    if (event.keyCode) {
      this.showOptions();
    }
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
        data-input-type="select"
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
              type="text"
              id={fieldId}
              ref={inputField}
              name={name}
              value={value}
              disabled={isDisabled}
              onChange={this.handleInput}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              onMouseDown={this.showOptions}
              onKeyDown={this.showOptionsOnKeyDown}
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
  showModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Select);
