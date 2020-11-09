import React, { useEffect, useState } from 'react';
import { TUAPI } from './Utils/TUAPI';
import { Layout } from 'antd';
import { Router, Route, Switch } from 'react-router-dom';

import { Component01 } from './Components/Component01';
import { Component02 } from './Components/Component02';
import { Component03 } from './Components/Component03';
import { Component04 } from './Components/Component04';

import history from './history';

import './App.css';

import LeftNavigation from './LeftNavigation';

const { Sider } = Layout

function App() {
  const [var1, setVar1] = useState([]);

  useEffect(()=>{
   // alert('Click!');
    TUAPI.get('/task/all').then((res)=>{
      debugger;

      setVar1(res.data);

      console.log(res);
    });
  }, []);

  return (
    <div className="App">
      <Router history={history}>
          <Layout>
            <Layout>
              <Sider width={220} className="site-layout-background">
                <div style={{ height: '100%', overflowY: 'scroll', backgroundColor: '#4e73df' }}>
                  <LeftNavigation></LeftNavigation>
                </div>
              </Sider>
              <Layout style={{ padding: '0 24px 24px' }}>
                <Switch>
                  <Route exact path="/Component01" component={Component01} />
                  <Route exact path="/Component02" component={Component02} />
                  <Route exact path="/Component03" component={Component03} />
                  <Route exact path="/Component04" component={Component04} />
                </Switch>
              </Layout>
            </Layout>
          </Layout>

        </Router>
      {/* {
        var1.map(data=>{
          return(<div style={{display:'block', width:'100vw', textAlign:'center'}}>
            {data.title}
          </div>);
        })
      } */}
      {/* {`${process.env.NODE_ENV}-${process.env.Tag}`}  */}
      {/* {JSON.stringify(process.env)} */}
{/* 
      {
        process.env.NODE_ENV==="production"? "api.ticketutil.net" : "localhost:8001"
      } */}
      {/* <input type='button' onClick={()=>{setVar1(200)}} defaultValue="Click Me"></input> */}
    </div>
  );
}

export default App;
