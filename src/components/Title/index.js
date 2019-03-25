import React from 'react';
import PropTypes from "prop-types";

const Title = (props) =>{
  return (
    <div className="Title">
    <h1>{props.text}</h1>
  </div>
  )
}

Title.propTypes = {
  text: PropTypes.string
};

Title.defaultProps = {
  text: "Title"
};

export default Title;
