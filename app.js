var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


// mongodb
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var dbURL = 'mongodb://localhost/feidian';
mongoose.connect(dbURL, {
  useMongoClient: true,
  // auth: {authdb:"admin"}
}, function(err) {
  if(err) {
    console.log("failed to connect mongodb");
  }else {
    console.log("connected to mongodb");
  }
});

var routers = require('./routers');

var app = express();

// 开发环境，加载webpack热加载模块
if(process.env.NODE_ENV == 'dev') {
  var webpackConf = require('./webpack.dev.config');
  var webpack = require('webpack');
  var WebpackDevMiddleware = require("webpack-dev-middleware");
  var WebpackHotMiddleware = require('webpack-hot-middleware');
  var compiler = webpack(webpackConf);
  app.use(WebpackDevMiddleware(compiler,{
    publicPath: webpackConf.output.publicPath
  }));
  app.use(WebpackHotMiddleware(compiler));
}


// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('views', path.join(__dirname + '/app', 'dist'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'app')));

app.use('/', routers);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  // res.render('error', {
  //   message: err.message,
  //   error: {}
  // });
  res.redirect('/');
});


module.exports = app;
