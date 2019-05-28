import React, { Component} from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import GalleryList from '../components/GalleryList';
import SearchForm from '../components/SearchForm';
import MainNav from '../components/MainNav';

export default class Home extends Component {

  static propTypes={
    search: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
  }

  componentDidMount() {
    this.props.search('Sweden');
  }

  render() {
    const title='Come See My New Home... Sweden';
    const { data, loading } = this.props;

    return (
      <div className='Header'>
        <div id='home-back' className='background'>
          <Header title={title} />
          <SearchForm />
          <MainNav />
        </div>

        {loading 
        ? <h1 className= "load" >Loading...</h1>
        : <GalleryList data={data} />
        }
        
      </div>
    )
  }
}


