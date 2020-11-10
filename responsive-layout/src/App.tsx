import React from 'react';
import Navbar from './components/nav/NavBar';
import { List, Data } from './components/Commodities';


const data:Data[] = [
  {
      id: Math.random(),
      title: "商品1",
      text: "描述",
      bgColor: "#D5CAFA"
  },
  {
      id: Math.random(),
      title: "商品2",
      text: "描述",
      bgColor: "#EDA9A9"
  },
  {
      id: Math.random(),
      title: "商品3",
      text: "描述",
      bgColor: "#F2EE8D"
  },
  {
      id: Math.random(),
      title: "商品4",
      text: "描述",
      bgColor: "#9FEACD"
  }
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <List Data={data}></List>
    </div>
  );
}

export default App;
