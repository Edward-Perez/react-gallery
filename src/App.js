import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Header';
import Gallery from './Gallery';
import apiKey from './config';

const flickr = apiKey;


class App extends Component {

  state = {
    data: [],
    loading: true,
    error: false
  };

  componentDidMount() {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickr}&tags=cats&sort=interestingness-desc&per_page=24&format=json&nojsoncallback=1`)
      .then( response => {
        this.setState({
          data: response.data.photos.photo,
          loading: true,
          error: false
        });
      })
      .catch(error => {
        this.error = true;
        console.log('error and route to error div component');
      })
  }

  render() {
    console.log(this.data);
    return (
      <div className="container">  
        <Header />
        <Gallery />
      </div>
    )
  }
}

export default App;
