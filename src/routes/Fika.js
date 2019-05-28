import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import GalleryList from '../components/GalleryList';
import BackButton from '../components/BackButton';

export default class Fika extends Component {

  static propTypes={
    search: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
  }

  componentDidMount() {
    this.props.search('Fika');
  }

  render() {
    const title='Fika... The most important part of life';
    const info='Fika is a special moment between two or more individuals having coffee or tea along with a few snacks like those semla\'s.'
    const { data, loading } = this.props;
    return (
      <div className='Header'>
        <div id='fika-back' className='background'>
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


