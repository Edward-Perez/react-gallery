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
    const title='Search Results for "Midsommar"';
    const { data, loading } = this.props;
    return (
      <div>
        <div>
          <Header title={title}/>
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
