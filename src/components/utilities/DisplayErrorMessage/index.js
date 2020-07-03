import React from "react";
import PropTypes from "prop-types";

function DisplayErrorMessage({ message }) {
  return (
    <div className="displaye">
      <h1>{message}</h1>
    </div>
  );
}

DisplayErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default DisplayErrorMessage;
