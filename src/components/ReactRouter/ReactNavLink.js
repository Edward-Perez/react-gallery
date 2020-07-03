import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function ReactNavLink({ content, url }) {
  return <NavLink to={url}>{content}</NavLink>;
}

ReactNavLink.propsTypes = {
  content: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ReactNavLink;
