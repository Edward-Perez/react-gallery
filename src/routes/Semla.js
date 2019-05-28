import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import GalleryList from '../components/GalleryList';
import BackButton from '../components/BackButton';

// Class for the Semla button
export default class Semla extends PureComponent {

  static propTypes={
    search: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
  }

  componentDidMount() {
    this.props.search('Semla');
  }
  
  render() {
    const title='The Semla\'s... its pure happiness' ;
    const info='The Swedes have dedicated an entire day to these scrumptious treats. ';
    const { data, loading } = this.props; 
    return (
      <div className='Header'>
        <div id='semla-back' className='background'>
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