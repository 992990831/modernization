const path = require('path');
const express = require('express');
const appRouter = require('./router');

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

require('dotenv').config({ path: path.resolve(__dirname, '../.env.server') });


const uiAppStatic = path.resolve(__dirname, '../build');
const app = express();
app.use(express.static(uiAppStatic));

app.use(cookieParser());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use('/', appRouter);


module.exports = app;
