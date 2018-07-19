import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PeopleFactSection.css';
import PeopleInfoField from './components/PeopleInfoField/PeopleInfoField';

class PeopleFactSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      fieldSchema: props.fieldSchema,
      primaryField: props.data[0],
      additionalFields: props.data.slice(1),
      isAdditionalFieldsVisible: false,
    };
  }

  toggleAdditionals = (event) => {
    event.preventDefault();
    this.setState({
      isAdditionalFieldsVisible: !this.state.isAdditionalFieldsVisible,
    });
  }

  render() {
    const {
      title,
      fieldSchema,
      primaryField,
      additionalFields,
      isAdditionalFieldsVisible,
    } = this.state;

    return (
      <div className="PeopleFactSection" >
        <div className="PeopleFactSection__primary">
          <div className="PeopleFactSection__label--primary">{ title }</div>
          <PeopleInfoField
            title={title}
            field={primaryField}
            schema={fieldSchema}
          />
        </div>
        <div className="PeopleFactSection__additionals" data-visible={isAdditionalFieldsVisible}>
          {
            additionalFields.map((data, index) => {
              return (
                <PeopleInfoField
                  key={index + 1}
                  title={title}
                  field={data}
                  schema={fieldSchema}
                />
              );
            })
          }
        </div>
        <div className="PeopleFactSection__button--toggleAdditionals" onClick={this.toggleAdditionals}>
          { isAdditionalFieldsVisible ? 'Hide' : 'Show more' }
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

export default connect(mapStateToProps, mapDispatchToProps)(PeopleFactSection);
