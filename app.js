var express = require('express');
require('dotenv').config();

const authRoute = require('./routes/authRoute');
const helloRoute = require('./routes/helloRoute');

const authInterceptor = require('./services/AuthInterceptor');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/authorize', authRoute);   //needs no authorization
app.use(authInterceptor.intercept);
app.use('/api/hello', helloRoute) //authorization required


module.exports = app;