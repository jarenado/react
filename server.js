var express = require("express");
var path = require("path");
// Babel ES6/JSX Compiler
// require('babel-register', ({ignore: /\.sass/,}));
require('babel-core/register')({
  presets: ['es2015', 'react']
});
require.extensions['.scss'] = () => {
  return;
};
require.extensions['.css'] = () => {
  return;
};

var swig  = require('swig');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('./src/client/app/routes');
var app = express();

app.use(express.static(path.join(__dirname,"src/client")));
app.use(function(req, res) {
  Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
      var page = swig.renderFile('src/client/index.html', { html: html });
      res.status(200).send(page);
    } else {
      res.status(404).send('Page Not Found')
    }
  });
});
app.listen(7777,function(){
    console.log("Started listening on port", 7777);
})
