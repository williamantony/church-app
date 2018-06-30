import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setStorageData, hideModal } from '../../../../../../redux/actions';
import './MonthPickerCell.css';

class MonthPickerCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: props.month,
      monthName: props.monthName,
      modalId: props.modalId,
      isSelected: false,
    };
  }

  componentWillMount() {
    const InputDate = this.props.storage['_Input']['_Date'];
    this.setState({
      isSelected: this.state.month === InputDate.month,
    });
  }

  handleClick = (event) => {
    event.preventDefault();

    const { month, modalId } = this.state;
    const storage = {
      data: { month },
      database: '_Input',
      table: '_Date',
    };

    this.props.setStorageData(storage.data, storage.database, storage.table);

    setTimeout(() => {
      this.props.hideModal(modalId);
    }, 250);
  }

  render() {
    return (
      <div
        className="MonthPickerCell"
        data-selected={this.state.isSelected}
        onClick={this.handleClick}
      >
        <div className="MonthPickerCell__name">{this.state.monthName.substring(0, 3)}</div>
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
  setStorageData,
  hideModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(MonthPickerCell);
