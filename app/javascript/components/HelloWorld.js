import React from "react"
import PropTypes from "prop-types"

class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        <p>Greeting: {this.props.greeting}</p>
        <p>Number: {this.props.number}</p>
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string,
  number: PropTypes.number,
};

export default HelloWorld;
