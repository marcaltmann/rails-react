import React, { Component, Fragment } from 'react';

import PersonList from './PersonList.js';
import NewForm from './NewForm.js';
import LoadingIndicator from './LoadingIndicator.js';

class ListLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      loaded: false,
      error: false,
    };

    this.addPersonToList = this.addPersonToList.bind(this);
  }

  componentDidMount() {
    fetch('/api/people')
      .then(response => response.json())
      .then(data => this.setState({
        list: data,
        loaded: true,
      }));
  }

  addPersonToList(person) {
    this.setState(({ list: oldList }) => {
      return {
        list: oldList.concat(person),
      };
    });
  }

  render() {
    return (
      <Fragment>
        {
          this.state.loaded ?
            (<Fragment>
              <PersonList list={this.state.list} />
              <NewForm addPerson={this.addPersonToList} />
            </Fragment>) :
            <LoadingIndicator />
        }
      </Fragment>
    );
  }
}

export default ListLoader;
