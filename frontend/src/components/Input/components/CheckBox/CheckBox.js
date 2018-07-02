import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setInput } from '../../../../redux/actions';
import './CheckBox.css';

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldId: `${props.form}_${props.type || 'text'}_${props.name}`,
      form: props.form,
      name: props.name,
      label: props.label,
      options: props.options || [],
      value: props.value || {},
    };
  }

  componentWillReceiveProps(props) {
    const { form, name } = this.state;
    const value = props.formData[form][name] || {};
    this.setState({ value });
  }

  handleClick = (option) => {
    const { form, name } = this.state;
    const value = { ...this.state.value };

    if (!value[option.name]) {
      value[option.name] = option.value;
    } else {
      delete value[option.name];
    }

    this.props.setInput(form, name, value);
  }

  render() {
    return (
      <div className="Input" data-focused="false">
        <div className="Input__area">
          <div className="Input__layer-box" />
          <div className="CheckBoxGroup">
            {
              (this.state.label)
                ? <div className="CheckBoxGroup__label">{this.state.label}</div>
                : null
            }
            {
              this.state.options.map((option, index) => {
                const isSelected = !!this.state.value[option.name];

                return (
                  <div key={`${this.state.fieldId}_${index + 1}`} className="CheckBox" data-selected={isSelected}>
                    <div className="CheckBox__input" onClick={() => this.handleClick(option)} />
                    <div className="CheckBox__label" onClick={() => this.handleClick(option)}>{option.label}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CheckBox);
