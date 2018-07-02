import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SplitField.css';
import SplitFieldInput from './components/SplitFieldInput/SplitFieldInput';

class SplitField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldId: `${props.form}_split-input_${props.name}`,
      form: props.form || 'Form',
      name: props.name,
      label: props.label,
      fields: props.fields || [],
    };
  }

  componentWillMount() {
    const fields = this.state.fields.map((field) => {
      return {
        ...field,
        ref: React.createRef(),
      };
    });

    this.setState({ fields });
  }

  render() {
    return (
      <div className="SplitField">
        {
          (this.state.label)
            ? <div className="SplitField__label">{this.state.label}</div>
            : null
        }
        <div className="SplitField__input-set">
          {
            this.state.fields.map((field, index, fields) => {
              return (
                <SplitFieldInput
                  key={new Date().getTime() + index + 1}
                  reference={field.ref}
                  nextInputField={fields[index + 1]}
                  id={`${this.state.fieldId}_${index + 1}`}
                  form={this.state.form}
                  name={this.state.name}
                  type={field.type}
                  label={field.label}
                  length={field.length}
                />
              );
            })
          }
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(SplitField);
