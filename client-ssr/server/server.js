require('ignore-styles');

import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App';
import SEOPage from '../src/components/SEOPage';
import { someAsyncCall } from '../server/API/Fun';

const PORT = process.env.PORT || 3006;
const app = express();

app.get(['', '/about', '/contact'], (req, res) => {
  const app = ReactDOMServer.renderToString(<App ssrLocation={req.url} />);
  console.log(`base uri: ${req.url}`);
  const indexFile = path.resolve('./build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

app.get('/seo', async function (req, res) {
  let result = await someAsyncCall();
  //let result = await callFun01();
  const pageStr = ReactDOMServer.renderToString(<SEOPage name={result} />);
  console.log(`base uri: ${req.url}`);
  return res.send(
    pageStr
  );
});

// const callFun01 = async () => {
//   let result = await someAsyncCall();
//   console.log(`result: ${result}`);
//   return result;
// }

app.use(express.static('./build'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
