import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createForm, setInput } from '../../redux/actions';
import './InlineInput.css';

class InlineInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type || 'text',
      form: props.form || '__InlineInput',
      name: props.name || 'default',
      placeholder: props.placeholder || '',
      value: props.value || '',
      isReadOnly: props.isReadOnly || false,
      maxLength: props.maxLength || 256,
      inputField: React.createRef(),
      testInput: React.createRef(),
      haveRecalculatedInputWidth: false,
    };
  }

  componentWillMount() {
    const {
      form,
      name,
      value,
    } = this.state;

    this.props.createForm(form);
    this.props.setInput(form, name, value);
  }

  componentWillReceiveProps(props) {
    const {
      form,
      name,
      isReadOnly,
    } = this.state;

    const value = props.formData[form][name];

    let needToSetState = false;
    const newState = {};

    if (isReadOnly !== props.isReadOnly) {
      needToSetState = true;
      newState.isReadOnly = props.isReadOnly;
    }

    if (value !== undefined) {
      if (value !== this.state.value) {
        needToSetState = true;
        newState.value = value;
      }
    }

    if (needToSetState) {
      this.setState({ ...newState });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    let shouldUpdate = false;

    if (nextState.haveRecalculatedInputWidth !== this.state.haveRecalculatedInputWidth) {
      shouldUpdate = true;
    }

    if (nextState.value !== this.state.value) {
      shouldUpdate = true;
    }

    if (nextState.isReadOnly !== this.state.isReadOnly) {
      shouldUpdate = true;
    }

    return shouldUpdate;
  }

  getWidthByValue = () => {
    const {
      value,
      placeholder,
    } = this.state;

    let width = '';

    const testInput = this.state.testInput.current;
    const inputField = this.state.inputField.current;

    if (testInput && inputField) {
      let newHTML = (value || placeholder);

      newHTML = newHTML.replace(/&/g, '&amp;');
      newHTML = newHTML.replace(/</g, '&lt;');
      newHTML = newHTML.replace(/>/g, '&gt;');
      newHTML = newHTML.replace(/\s/g, '&nbsp;');

      testInput.innerHTML = newHTML;

      const calulatedWidth = parseInt(window.getComputedStyle(testInput).width, 10) + 2;
      const inputFieldSet = inputField.parentElement.parentElement.parentElement;

      width = `${(calulatedWidth < (inputFieldSet.clientWidth - 60)) ? calulatedWidth : width}px`;

    } else {
      const { length } = (value || placeholder);
      width = `${((length + 1) * 9)}px`;
    }


    return width;
  }

  handleInput = (event) => {
    event.preventDefault();

    const { value } = event.target;
    const {
      form,
      name,
    } = this.state;

    this.props.setInput(form, name, value);
  }

  render() {
    const {
      type,
      name,
      placeholder,
      value,
      isReadOnly,
      inputField,
      haveRecalculatedInputWidth,
    } = this.state;

    const style = {
      width: this.getWidthByValue(),
    };

    if (!haveRecalculatedInputWidth) {
      setTimeout(() => {
        this.setState({
          haveRecalculatedInputWidth: true,
        });
      }, 1000);
    }

    return (
      <div className="InlineInput" data-empty={value === ''} data-readonly={isReadOnly}>
        <input
          ref={inputField}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={this.handleInput}
          className="InlineInput__input"
          readOnly={isReadOnly}
          style={style}
        />
        <div
          ref={this.state.testInput}
          className="InlineInput__testInput"
        />
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
  createForm,
  setInput,
};

export default connect(mapStateToProps, mapDispatchToProps)(InlineInput);
