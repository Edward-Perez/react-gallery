import React from 'react'
import BackButton from '../components/BackButton'

const NotFound = () => {
  return (
    <div className='error-page'>
      <h1>Sorry Looks like that page does not exist yet</h1>  
      <p>Danbot wants you to click the back button</p>
      <BackButton />    
    </div>
  )
}

export default NotFound;
