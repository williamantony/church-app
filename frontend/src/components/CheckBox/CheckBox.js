import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setInput } from '../../redux/actions';
import './CheckBox.css';

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type || 'checkbox',
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
    let value = option.value;
    if (this.state.type === 'checkbox') {
      value = {...this.state.value};
      if (!value[option.name]) {
        value[option.name] = option.value;
      } else {
        delete value[option.name];
      }
    }
    this.props.setInput(form, name, value);
  }

  render() {
    return (
      <div className="CheckBoxGroup">
        <div className="CheckBoxGroup__label">{this.state.label}</div>
        {
          this.state.options.map((option, index) => {
            let isSelected = false;
            if (this.state.type === 'checkbox') {
              isSelected = !!this.state.value[option.name];
            } else {
              isSelected = (option.value === this.state.value);
            }
            
            return (
              <div
                key={index}
                className="CheckBox"
                data-selected={isSelected}
                onClick={() => this.handleClick(option)}
              >
                <div className="CheckBox__input" />
                <div className="CheckBox__label">{option.label}</div>
              </div>
            );
          })
        }
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
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckBox);
