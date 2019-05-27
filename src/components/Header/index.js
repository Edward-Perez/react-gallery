import React from 'react'
import PropTypes from 'prop-types';

const Header = (props) => {
  
  return (
    <div className='header'>
      <h1 id='header-title'>{props.title}</h1>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;
