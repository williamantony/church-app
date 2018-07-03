import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setInput, showModal } from '../../../../redux/actions';
import DatePicker from '../DatePicker/DatePicker';

class DateSelect extends Component {
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
    const { form, name } = this.state;

    const storageData = props.storage['_Input']['_Date'] || {};

    const now = new Date();
    const date = storageData.date || now.getDate();
    const month = storageData.month || now.getMonth();
    const year = storageData.year || now.getFullYear();

    const dateString = new Date(year, month, date).toDateString();
    const value = (Object.keys(storageData).length > 0) ? dateString : '';

    this.props.setInput(form, name, value);

    this.setState({
      value,
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
    const modalId = `modal_${new Date().getTime()}`;

    const selectorOptions = (
      <DatePicker modalId={modalId} />
    );

    this.props.showModal(selectorOptions, 'Pick a date', modalId);
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
    storage: state.storage,
  };
};

const mapDispatchToProps = {
  setInput,
  showModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(DateSelect);
