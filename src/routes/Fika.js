import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import GalleryList from '../components/GalleryList';
import BackButton from '../components/BackButton';

export default class Fika extends Component {

  static propTypes={
    search: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.search('Fika');
  }

  render() {
    const title='Fika... The most important part of life';
    const info='Fika is a special moment between two or more individuals while drinking coffee or tea along with a few sweet snacks to enjoy like those semla.'
    const { data } = this.props;
    return (
      <div className='Header'>
        <Header title={title}/>
        <BackButton />
        <GalleryList 
          data={data} 
          info={info} />
      </div>
    )
  }

}


