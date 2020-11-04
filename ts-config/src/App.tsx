import React, { Fragment } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

function App() {
  return (
    <Fragment>
      <Header ID={11}></Header>
      <Footer Name='Lianping' ID={12}></Footer>
    </Fragment>
  );
}

export default App;
