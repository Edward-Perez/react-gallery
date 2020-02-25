import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNav = () => {
  return (
    <nav className='main-nav'>     
      <ul>
        <li><NavLink to='/semla'>Semla</NavLink></li>
        <li><NavLink to='/midsommar'>Midsommar</NavLink></li>
        <li><NavLink to='/fika'>Fika</NavLink></li>
      </ul>
    </nav>
  )
}


export default MainNav;