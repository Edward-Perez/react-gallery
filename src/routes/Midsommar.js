import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import GalleryList from '../components/GalleryList';
import BackButton from '../components/BackButton';

export default class Midsommar extends Component {

  static propTypes={
    search: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
  }

  componentDidMount() {
    this.props.search('midsommar Midsommarstång')
  }

  render() {
    const title='The Greatest Holiday In The World';
    const info='If you see one of these bad boys up, get ready for a non stop drinking bonanza while dancing and singing around a stucture which resembles...well... I\'ll let you figure that one out.';
    const { data, loading } = this.props;
    return (
      <div className='Header'>
        <div id='midsommar-back' className='background'>
          <Header title={title}/>
          <p id='info'>{info}</p>
          <BackButton />
        </div>

        { loading 
        ? <h1 className= "load" >Loading...</h1>
        : <GalleryList data={data} />
        }

      </div>
    )
  }
}
