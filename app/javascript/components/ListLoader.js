import React, { Component, Fragment } from 'react';

import PersonList from './PersonList.js';
import LoadingIndicator from './LoadingIndicator.js';

class ListLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      loaded: false,
      error: false,
    };
  }

  componentDidMount() {
    fetch('/api/people')
      .then(response => response.json())
      .then(data => this.setState({
        list: data,
        loaded: true,
      }));
  }

  render() {
    return (
      <Fragment>
        {
          this.state.loaded ?
            <PersonList list={this.state.list} /> :
            <LoadingIndicator />
        }
      </Fragment>
    );
  }
}

export default ListLoader;
