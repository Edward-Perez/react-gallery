import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Routes
import Home from './Home';
import Semla from './Semla';
import Midsommar from './Midsommar';
import Fika from './Fika';
import Search from './Search';

import NotFound from './NotFound';

// Components for Route handling
export default class Routes extends Component {
  
  render() {
  const { search, data, loading } = this.props;
    return (
      <BrowserRouter> 
        <Switch>
          <Route path='/search' render= {(props) =>
            <Search 
              value={props.location.state.value}
              search={search}
              data={data} 
              loading={loading} /> }
          />
          <Route exact path='/Midsommar' render= {() =>
            <Midsommar 
              search={search}
              data={data}
              loading={loading} /> }
          />
          <Route exact path='/Fika' render= {() =>
            <Fika 
              search={search}
              data={data}
              loading={loading} /> }
          />
          <Route exact path='/Semla' render= {() =>
            <Semla 
              search={search}
              data={data}
              loading={loading} /> }
          />
          <Route exact path='/' render={() =>
            <Home 
              search={search}
              data={data}
              loading={loading} /> }
          />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

