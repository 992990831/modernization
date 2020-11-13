import React from 'react';
import './App.css';

//import { UseMemoDemo } from './HooksDemo/UseMemoDemo';
//import { UseCallbackDemo } from './HooksDemo/UseCallbackDemo';
//import LazyDemo from './LazyDemo/LazyDemo';
import DynamicLazyDemo from './DynamicLazyDemo/DynamicLazyDemo';

function App() {
  return (
    <div className="App">
      <DynamicLazyDemo></DynamicLazyDemo>
      {/* <LazyDemo></LazyDemo> */}
      {/* <UseMemoDemo></UseMemoDemo> */}
      {/* <UseCallbackDemo></UseCallbackDemo> */}
    </div>
  );
}

export default App; 
