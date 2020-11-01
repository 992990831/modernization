const path = require('path');
const express = require('express');
const uiAppStatic = path.resolve(__dirname, '../build');

const PORT = process.env.PORT || 3006;
const app = express();

app.get('/', (req, resp) => {
    console.log(process.env.NODE_ENV);
    console.log(process.env.PORT);
    resp.sendFile('index.html', { root: uiAppStatic });
  });
  
  app.use(express.static(uiAppStatic));

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });