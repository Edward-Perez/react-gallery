import React from 'react'
import PropTypes from 'prop-types'
import SearchForm from './SearchForm';
import MainNav from './MainNav';

const Header = props => {
  return (
    <div className='header'>
      <h1>See what we see</h1>
      <SearchForm />
      <MainNav />
    </div>
  )
}

Header.propTypes = {

}

export default Header;
