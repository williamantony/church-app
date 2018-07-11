import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPeople } from '../../redux/actions';
import './PeoplesList.css';
import PeopleCard from '../PeopleCard/PeopleCard';

class PeoplesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peoples: [],
    };
  }

  componentWillMount() {
    this.props.getPeople({});
  }

  componentWillReceiveProps(props) {
    this.setState({
      peoples: [
        ...props.people,
      ],
    });
  }

  render() {
    return (
      <div className="PeoplesList">
        {
          this.state.peoples.map((person) => {
            return <PeopleCard key={person._id} person={person} />;
          })
        }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    people: state.people,
  };
};

const mapDispatchToProps = {
  getPeople,
};

export default connect(mapStateToProps, mapDispatchToProps)(PeoplesList);
