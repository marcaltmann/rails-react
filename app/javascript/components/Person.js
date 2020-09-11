import React from 'react';
import PropTypes from 'prop-types';

function Person(props) {
  return (
    <React.Fragment>
      { props.forename } <b>{ props.surname }</b>
    </React.Fragment>
  );
}

Person.propTypes = {
  forename: PropTypes.string,
  surname: PropTypes.string,
};

export default Person;
