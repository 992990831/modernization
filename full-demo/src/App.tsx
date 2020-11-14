import React, { lazy, Suspense } from 'react';
import './App.css';
import './TransitionStyle.css';

import Navbar from './components/nav/NavBar';
//import { List, Data } from './components/Commodities';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { Home } from './components/Home';
import Commodities from './components/Commodities';
import {Orders} from './components/Orders';

import { NotFound } from './components/NotFound';

const Routes = withRouter(({location}) => (
  <TransitionGroup className={'router-wrapper'}>
    <CSSTransition
      timeout={5000}
      classNames={'fade'}
      key={location.pathname}
    >
      <Switch location={location}>
        <Route exact path='/' component={Home} />
        <Route exact path='/commodities' component={Commodities} />
        <Route exact path='/orders' component={Orders} />
        <Route exact path='/*' component={NotFound} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

function App() {
  return (
    <Router>
      <Navbar />
      <Routes />
    </Router>
  );
}

export default App;
