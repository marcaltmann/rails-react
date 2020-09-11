import React, { Component } from 'react';

import Person from './Person.js';

const testPeople = [
  {
    id: 1,
    forename: 'Marc',
    surname: 'Altmann',
  },
  {
    id: 2,
    forename: 'Peter',
    surname: 'Ullrich',
  },
];

class PersonList extends Component {
  render() {
    return (
      <ul>
        {
          testPeople.map(person => (
            <li key={person.id}>
              <Person forename={person.forename} surname={person.surname} />
            </li>
          ))
        }
      </ul>
    );
  }
}

export default PersonList;
