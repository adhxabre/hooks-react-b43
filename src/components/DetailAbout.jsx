import React from "react";

import PropTypes from "prop-types";

const DetailAbout = (props) => {
  return (
    <>
      <h1>name: {props.name}</h1>
      <p>age: {props.age}</p>
      <p>isMarried: {props.isMarried ? "true" : "false"}</p>
    </>
  );
};

DetailAbout.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
};

export default DetailAbout;
