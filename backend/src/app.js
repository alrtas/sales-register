var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const connection  = require('./infrastructure/connection')
const Tables      = require('./infrastructure/tables')

let indexRouter   = require('./routes/index');
let salesRouter   = require('./routes/sales');
let sellersRouter = require('./routes/sellers');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

connection.connect((erro)=>{
  if(erro){
      console.dir(erro)
  }
  else {

    Tables.init(connection)

    app.use('/', indexRouter);
    app.use('/sellers', sellersRouter);
    app.use('/sales', salesRouter)
    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
      next(createError(404));
    });

    // error handler
    app.use(function(err, req, res, next) {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};

      // render the error page
      res.status(err.status || 500);
      res.render('error');
    });
  }
})

module.exports = app;
