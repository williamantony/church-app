import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createForm, setInput } from '../../../../../../../../redux/actions';
import './PeopleInfoInput.css';

class PeopleInfoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: props.form,
      value: props.value,
      ...props.input,
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
    } = this.state;

    const value = props.formData[form][name];

    if (value !== undefined) {
      if (value !== this.state.value) {
        this.setState({ value });
      }
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

    return shouldUpdate;
  }

  getWidthByValue = () => {
    const {
      value,
      placeholder,
    } = this.state;

    let width = '';

    const testInput = this.state.testInput.current;

    if (testInput) {
      let newHTML = (value || placeholder);

      newHTML = newHTML.replace(/&/g, '&amp;');
      newHTML = newHTML.replace(/</g, '&lt;');
      newHTML = newHTML.replace(/>/g, '&gt;');
      newHTML = newHTML.replace(/\s/g, '&nbsp;');

      testInput.innerHTML = newHTML;
      width = `${(parseInt(window.getComputedStyle(testInput).width, 10) + 2)}px`;
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

  handleFocus = (event) => {
    /**
     * IMPLEMENT Scroll To View
     */
  }

  render() {
    const {
      name,
      placeholder,
      value,
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
      <div className="PeopleInfoInput" data-name={name}>
        <input
          type="text"
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={this.handleInput}
          onFocus={this.handleFocus}
          className="PeopleInfoInput__input"
          style={style}
        />
        <div
          ref={this.state.testInput}
          className="PeopleInfoInput_testInput"
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

export default connect(mapStateToProps, mapDispatchToProps)(PeopleInfoInput);
