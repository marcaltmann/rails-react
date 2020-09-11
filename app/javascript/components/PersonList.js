import React from 'react';
import PropTypes from 'prop-types';

import Person from './Person.js';

function PersonList(props) {
  return (
    <ul>
      {
        props.list.map(person => (
          <li key={person.id}>
            <Person forename={person.forename} surname={person.surname} />
          </li>
        ))
      }
    </ul>
  );
}

PersonList.propTypes = {
  list: PropTypes.array,
};

export default PersonList;
