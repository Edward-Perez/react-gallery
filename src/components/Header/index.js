import React from "react";
import PropTypes from "prop-types";

function Header({ title, children }) {
  return (
    <div className="header">
      <div className="header-content">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
