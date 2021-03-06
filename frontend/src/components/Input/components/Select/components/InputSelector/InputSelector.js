import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setInput, hideModal } from '../../../../../../redux/actions';
import './InputSelector.css';

class InputSelectorOptionsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: props.form,
      name: props.name,
      value: props.value || '',
      label: props.label,
      options: props.options || [],
      onSelect: props.onSelect,
      modalId: props.modalId,
      searchInput: React.createRef(),
      searchInputValue: '',
    };
  }

  componentWillMount() {
    const { form, name } = this.state;
    const formData = this.props.formData[form] || {};
    this.setState({
      value: formData[name] || '',
    });
  }

  componentDidMount() {
    setTimeout(() => {
      this.state.searchInput.current.focus();
    }, 250);
  }

  componentWillReceiveProps(props) {
    const {
      form, name,
    } = this.state;

    const inputValue = props.formData[form][name];
    const value = (inputValue !== undefined) ? inputValue : '';

    this.setState({ value });
  }

  selectOption = (value) => {
    const {
      form, name, onSelect, modalId,
    } = this.state;

    this.props.setInput(form, name, value);

    setTimeout(() => {
      this.props.hideModal(modalId);
      if (typeof onSelect === 'function') {
        onSelect();
      }
    }, 250);
  }

  handleSearch = (event) => {
    event.preventDefault();

    this.setState({
      searchInputValue: event.target.value,
    });
  }

  render() {
    return (
      <div className="InputSelector">
        <input
          type="text"
          ref={this.state.searchInput}
          className="InputSelector__search"
          placeholder="Search"
          value={this.state.searchInputValue}
          onChange={this.handleSearch}
        />
        <div className="InputSelector__options">
          {
            this.state.options
              .filter(option => new RegExp(`${this.state.searchInputValue}`, 'gi').test(option.label))
              .map((option, index) => {
                return (
                  <div
                    key={`${option.value}_${index + 1}`}
                    className="InputSelector__option"
                    onClick={() => this.selectOption(option.value)}
                  >
                    <div
                      className="InputSelector__option__selection-mark"
                      data-visibility={(option.value === this.state.value)}
                    />
                    <div className="InputSelector__option__label">{option.label || ''}</div>
                  </div>
                );
            })
          }
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
  hideModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(InputSelectorOptionsList);
