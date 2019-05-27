import React, { Component} from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import GalleryList from '../components/GalleryList';
import SearchForm from '../components/SearchForm';
import MainNav from '../components/MainNav';

export default class Home extends Component {

  static propTypes={
    search: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.search('Sweden');
  }

  render() {
    const title='Come See What I See In Sweden';
    const { data } = this.props;

    return (
      <div className='Header'>
        <Header title={title} />
        <SearchForm />
        <MainNav />
        <GalleryList data={data} />
      </div>
    )
  }
}


