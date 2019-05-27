import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import GalleryList from '../components/GalleryList';
import BackButton from '../components/BackButton';

export default class Midsommar extends Component {

  static propTypes={
    search: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.search('midsommar Midsommarstång')
  }

  render() {
    const title='The Greatest Holiday In The World';
    const info='Once a year the Swedes get together for a non stop drinking bonanza while dancing and singing around a stucture which resembles...well... I\'ll let you figure that one out.';
    const { data } = this.props;
    return (
      <div className='Header'>
        <div id='midsommar-back' className='background'>
          <Header title={title}/>
          <p id='info'>{info}</p>
          <BackButton />
        </div>
        <GalleryList 
          data={data} />
      </div>
    )
  }
}
