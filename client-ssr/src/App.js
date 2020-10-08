import React from 'react';
// import logo from './logo.svg';
import './App.css';

// //for CSR
// //import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
// //for SSR - SSR doesn't have real dom
// import { Switch, Route, StaticRouter } from 'react-router-dom';
// import { createMemoryHistory } from 'history';

import Header from "./Header";
import routes from "./Route";

import { StaticRouter, BrowserRouter, Link, Route, Switch } from "react-router-dom";

function GeneralRouter(props) {
  const {ssrLocation, children} = props;
  if (ssrLocation == null) {
      return <BrowserRouter>{children}</BrowserRouter>;
  }
  return <StaticRouter location={ssrLocation}>{children}</StaticRouter>;
}

function App(props) {
  const {ssrLocation} = props;

  return (
    <div className="App">
      <GeneralRouter ssrLocation={ssrLocation}>
        <Header />
        <Switch>
          {routes.map(route => <Route key={route.path} {...route} />)}
        </Switch>
      </GeneralRouter>
      {/* <GeneralRouter ssrLocation={ssrLocation}>
        <div>
          <header className="App-header">
            <div>
              <Link className="App-link" to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </header>
          <section>
            <Switch>
              <Route path="/about">
                This is the about page!
              </Route>
              <Route path="/contact">
                This is the contact page!
              </Route>
              <Route path="/">
                This is the home page!
              </Route>
            </Switch>
          </section>
        </div>
      </GeneralRouter> */}

    </div>
  );
}

export default App;
