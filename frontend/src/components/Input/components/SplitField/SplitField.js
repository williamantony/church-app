import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStorage } from '../../../../redux/actions';
import './SplitField.css';
import SplitFieldInput from './components/SplitFieldInput/SplitFieldInput';

class SplitField extends Component {
  constructor(props) {
    super(props);

    const fields = (props.fields || []).map((field) => {
      return {
        ...field,
        ref: React.createRef(),
      };
    });

    this.state = {
      fieldId: `${props.form}_split-input_${props.name}`,
      form: props.form || 'Form',
      name: props.name,
      label: props.label,
      fields,
    };
  }

  componentWillMount() {
    this.props.createStorage('_Input', this.state.fieldId);
  }

  render() {
    const {
      form, name, label, fields,
    } = this.state;

    return (
      <div className="Input" data-focused="false">
        <div className="Input__area">
          <div className="Input__layer-box" />
          <div className="SplitField">
            {
              (label)
                ? <div className="SplitField__label">{label}</div>
                : null
            }
            <div className="SplitField__input-set">
              {
                fields.map((field, index, fieldsArray) => {
                  return (
                    <SplitFieldInput
                      key={new Date().getTime() + index + 1}
                      form={form}
                      name={name}
                      index={index}
                      field={field}
                      fields={fieldsArray}
                    />
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  createStorage,
};

export default connect(mapStateToProps, mapDispatchToProps)(SplitField);
