import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setInput, hideModal } from '../../redux/actions';
import './InputSelector.css';

class InputSelectorOptionsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: props.form,
      name: props.name,
      label: props.label,
      options: props.options || [],
    };
  }

  selectOption = (value) => {
    const { form, name } = this.state;
    this.props.setInput(form, name, value);
    this.props.hideModal('InputSelectorModal');
  }

  render() {
    return (
      <div className="InputSelector">
        <div className="InputSelector__title">{this.state.label}</div>        
        {
          this.state.options.map((option, index) => {
            return (
              <div key={index} className="InputSelector__option" onClick={() => this.selectOption(option.label)}>
                <div className="InputSelector__option__label">{option.label || ''}</div>
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
  hideModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(InputSelectorOptionsList);
