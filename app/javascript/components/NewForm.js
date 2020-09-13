import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    let elements = e.target.elements;
    let forename = elements[0].value.trim();
    let surname = elements[1].value.trim();

    if (forename === '' || surname === '') {
      return;
    }

    fetch('/api/people', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': this.props.authToken,
      },
      body: JSON.stringify({ forename, surname }),
    })
      .then(response => response.json())
      .then(person => {
        this.props.addPerson(person);

        elements[0].value = '';
        elements[1].value = '';
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Forename" />
        <input type="text" placeholder="Surname" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

NewForm.propTypes = {
  addPerson: PropTypes.func,
  authToken: PropTypes.string,
};

export default NewForm;