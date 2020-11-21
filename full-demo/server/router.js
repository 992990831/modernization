'use strict';

const express = require('express');
const v8 = require('v8');
const appRouter = new express.Router();
const path = require('path');
const uiAppStatic = path.resolve(__dirname, '../build');

appRouter.get('/*', (req, resp) => {
  resp.sendFile('index.html', { root: uiAppStatic });
});

module.exports = appRouter;
