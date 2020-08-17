import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import About from './About'

function App() {
  
  return (
    <>
      <Router>
        <Nav/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about' component={About}/>
          </Switch>
      </Router>
    </>
  );
}

export default App;
