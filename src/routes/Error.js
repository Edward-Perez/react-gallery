import React from 'react';
import PropTypes from 'prop-types';

const Error = (props) => {
  return (
    <div className='error-page'>
      <h1>Whoop looks like we have a {props.message}</h1>   
      <p>Could you please refresh?</p>   
    </div>
  )
}

Error.propTypes={
  message: PropTypes.string.isRequired
}

export default Error;