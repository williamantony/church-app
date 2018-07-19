import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PeopleInfoField.css';
import PeopleInfoInput from './components/PeopleInfoInput/PeopleInfoInput';

class PeopleInfoField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: `Input_${props.field._id || ''}`,
      field: props.field,
      schema: props.schema,
    };
  }

  render() {
    const {
      form,
      field,
      schema,
    } = this.state;

    return (
      <div className="PeopleInfoField">
        <div className="PeopleInfoField__label">{ field._label || '' }</div>
        <div className="PeopleInfoField__set">
          {
            schema.map((row, rowIndex) => {
              return (
                <div className="PeopleInfoField__set__row" key={`field_row_${rowIndex + 1}`}>
                  {
                    row.map((column, i) => {
                      return (
                        <PeopleInfoInput
                          key={`PeopleInfoInput_${i + 1}`}
                          form={form}
                          input={column}
                          value={field[column.name]}
                        />
                      );
                    })
                  }
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
  return state;
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(PeopleInfoField);
