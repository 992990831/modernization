import React from 'react';
import './App.css';

//import { UseMemoDemo } from './HooksDemo/UseMemoDemo';
//import { UseCallbackDemo } from './HooksDemo/UseCallbackDemo';
import LazyDemo from './LazyDemo/LazyDemo';

function App() {
  return (
    <div className="App">
      <LazyDemo></LazyDemo>
      {/* <UseMemoDemo></UseMemoDemo> */}
      {/* <UseCallbackDemo></UseCallbackDemo> */}
    </div>
  );
}

export default App;
