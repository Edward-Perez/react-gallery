import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import GalleryList from '../components/GalleryList';
import { NavLink } from 'react-router-dom';

// Route for search results
export default class Search extends Component {
  
  static propTypes={
    value: PropTypes.string.isRequired,
    search: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.search(this.props.value);
  }
  
  render() {
    const title=`Search Results for "${this.props.value}"` ;
    const { data } = this.props; 
    return (
      <div className='Header'>
        <div id='search' className='background'>
          <Header title={title}/>
          <NavLink to='/' id='back-home-button'>Back Home</NavLink>
        </div>
        <GalleryList data={data} />
      </div>
    )
  }
}