import React, { Component } from 'react';
import {BrowserRouter, Route , Switch} from 'react-router-dom'

import Main from './containers/mainPage'
import Auth from './containers/Auth'
import Select from './containers/Show_movie'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Switch>
        <Route path = '/Auth'  component={ Auth }/>
        <Route path = '/Select_movie'  component={ Select }/>
        <Route path = '/' component={ Main }/>
        </Switch>
        
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
