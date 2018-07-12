import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PeopleFactSheet.css';

class PeopleFactSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      facts: [
        {
          label: 'Address',
          values: [
            `5000 N Washingtion Ave,\nChicago, IL - 60000`,
          ],
        },
        {
          label: 'Phone Number',
          values: [
            '1.888.888.8888',
          ],
        },
        {
          label: 'Email Address',
          values: [
            'email@example.com',
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div className="PeopleFactSheet">
        <div className="PeopleFactSheet__title unselectable">Contact Information</div>
        {
          this.state.facts.map((fact) => {
            return (
              <div className="PeopleFactSheet__section" key={fact.label}>
                <div className="PeopleFactSheet__section__button--update" />
                <div className="PeopleFactSheet__section__text">
                  <div className="PeopleFactSheet__section-label unselectable">{fact.label}</div>
                  {
                    fact.values.map((value) => {
                      return (
                        <div className="PeopleFactSheet__section-value" key={value}>
                          {
                            value.split('\n').map((part) => {
                              return (
                                <div>{part}</div>
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
          })
        }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(PeopleFactSheet);
