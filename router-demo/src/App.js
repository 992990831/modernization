import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Component01 } from './components/Component01';
import { Component02 } from "./components/Component02";

function App() {
  return (
    <>
      <Router>
        <div>
          <h2>Sites</h2>
          <ul>
            <li>
              <Link to="/google">Google</Link>
            </li>
            <li>
              <Link to="/baidu">Baidu</Link>
            </li>
            <li>
              <Link to="/bing">Bing</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/:category" children={<Component01 />} />
          </Switch>
        </div>
      </Router>
      <hr></hr>
      <Router>
        <div>
          <h2>自定义路由的渲染事件</h2>
          <ul>
            <li>
              <Link to="/public">Public</Link>
            </li>
            <li>
              <Link to="/private">Private</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/public" exact render={()=>{
                
                return <Component02></Component02>
              }} />
              <Route path="/private" exact render={()=>{
                
                return <div>You are not allowed to visit this page</div>
              }} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
