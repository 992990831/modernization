import React, { useReducer } from 'react';
import One from './Components/One';
import Two from './Components/Two';

import { CounterContext, countReducer, initState } from './CustomContext/CounterContext';

function App() {
  const [counterState, counterdispatch] = useReducer(countReducer, initState);
  return (
    <CounterContext.Provider  value={{ state: counterState, dispatch: counterdispatch }}>
      <One></One>
      <Two></Two>
    </CounterContext.Provider>
  );
}

export default App;
