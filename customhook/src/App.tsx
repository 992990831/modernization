import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';

import { Users } from './containers/Users';
import { Orders } from './containers/Orders';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li><Link to='user'>User</Link></li>
          <li><Link to='order'>Order</Link></li>
        </ul>

        <Switch>
          <Route path="/user" component={Users} />
          <Route path="/order" component={Orders} />
          <Redirect to="/user" />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
