import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

// Routes
import Error from './routes/Error';
import Routes from './routes';

// API
import apiKey from './config';

// Main class which holds data on all images and directs to specific routes
export default class App extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
      error: false,
      errorMessage: ''
    };
  }

  // axios api call with a setState reset for every api call
   getData = (search) => {
    this.setState({
      data: [],
      loading: true,
      error: false,
      errorMessage: ''
    });
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${search}&sort=relevance&per_page=24&format=json&nojsoncallback=1`)
      .then( response => {
        this.setState({
          data: response.data.photos.photo,
          loading: false,
          error: false,
          errorMessage: ''
        });
      })
      .catch(error => {
        this.setState({
          data: [],
          loading: false,
          error: true,
          errorMessage: error.message
        });
        console.log('Error receiving response data',error);
      });
  }

  render() {
    if(this.state.error) {
      return (
        <Error message={this.state.errorMessage} />
      )
    } 
    return (

      <Routes 
      search={this.getData}
      data={this.state.data} 
      loading={this.state.loading} />
    )
  }
}



