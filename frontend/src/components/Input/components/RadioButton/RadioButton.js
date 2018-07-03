import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setInput } from '../../../../redux/actions';
import './RadioButton.css';

class RadioButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldId: `${props.form}_radiobutton_${props.name}`,
      form: props.form,
      name: props.name,
      label: props.label || '',
      options: props.options || [],
      value: props.value || {},
    };
  }

  componentWillReceiveProps(props) {
    const { form, name } = this.state;
    const value = props.formData[form][name] || {};
    this.setState({ value });
  }

  handleClick = (value) => {
    const { form, name } = this.state;
    this.props.setInput(form, name, value);
  }

  render() {
    return (
      <div className="Input" data-focused="false">
        <div className="Input__area">
          <div className="Input__layer-box" />
          <div className="RadioButtonGroup">
            {
              (this.state.label)
                ? <div className="RadioButtonGroup__label">{this.state.label}</div>
                : null
            }
            {
              this.state.options.map((option, index) => {
                const isSelected = (option.value === this.state.value);

                return (
                  <div key={`${this.state.fieldId}_${index + 1}`} className="RadioButton" data-selected={isSelected}>
                    <div className="RadioButton__input" onClick={() => this.handleClick(option.value)} />
                    <div className="RadioButton__label" onClick={() => this.handleClick(option.value)}>{option.label}</div>
                  </div>
                );
              })
            }
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

export default connect(mapStateToProps, mapDispatchToProps)(RadioButton);
