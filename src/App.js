import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

// Routes
import Home from './routes/Home';
import Semla from './routes/Semla';
import Midsommar from './routes/Midsommar';
import Fika from './routes/Fika';
import Search from './routes/Search';
import Error from './routes/Error';
import NotFound from './routes/NotFound';

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

  // axios api call
  getData = (search) => {
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
        <BrowserRouter> 
          <Switch>
            <Route path='/search' render= {(props) =>
                <Search 
                  value={props.location.state.value}
                  search={this.getData}
                  data={this.state.data} /> }
            />
            <Route exact path='/Midsommar' render= {() =>
              <Midsommar 
                search={this.getData}
                data={this.state.data} /> }
            />
            <Route exact path='/Fika' render= {() =>
              <Fika 
                search={this.getData}
                data={this.state.data} /> }
            />
            <Route exact path='/Semla' render= {() =>
              <Semla 
                search={this.getData}
                data={this.state.data} /> }
            />
            <Route exact path='/' render={() =>
              <Home 
                search={this.getData}
                data={this.state.data} /> }
            />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
    )
  }
}



