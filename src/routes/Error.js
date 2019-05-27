import React from 'react';
import PropTypes from 'prop-types';

const Error = (props) => {
  return (
    <div className='error-page'>
      <h1>Danbot has spotted a: {props.message}</h1>   
      <p>Danbot suggest a refresh</p>   
    </div>
  )
}

Error.propTypes={
  message: PropTypes.string.isRequired
}

export default Error;