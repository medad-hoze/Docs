import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Documentation from  './Documentation';
import LogIn from './LogIn';
import GeoAI from './GeoAI';
import NetWork from './NetWork';

import HomePage from './HomePage';


import './App.css';

function App() {

    return (
      <Router>
        <div>
          <nav>
            <ul>
            <li>
                <Link to="/HomePage">Home page</Link>
              </li>
              <li>
                <Link to="/Documentation">Documentation</Link>
              </li>
              <li>
                <Link to="/GeoAI">GeoAI</Link>
              </li>
              <li>
                <Link to="/NetWork">NetWork</Link>
              </li>
              <li>
                <Link to="/LogIn">LogIn</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/Documentation" component={Documentation} />
            <Route path="/HomePage" component={HomePage} />
            <Route path="/GeoAI" component={GeoAI} />
            <Route path="/NetWork" component={NetWork} />
            <Route path="/Login" component={LogIn} />
          </Switch>
        </div>
      </Router>
    );
  }
  

export default App;