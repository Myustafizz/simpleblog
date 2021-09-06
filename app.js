const express = require('express');
const logger = require('morgan');

require('dotenv').config();
const name = 'ULAB';
console.log(`University name: ${name}`);

const indexRouter = require('./routes');
const usersRouter = require('./routes/users');
require('./db/db');

console.log(process.env.APP_NAME);
const app = express();

// view engine setup


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', indexRouter);
app.use('/users', usersRouter);



module.exports = app;
