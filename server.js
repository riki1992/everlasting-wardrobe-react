//Requirements
var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var port = process.env.PORT || 3000;

//Middleware
app.use(express.static('public'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride(function(req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

//Controllers
var clothesController = require('./controllers/clothes.js');
app.use ('/clothes', clothesController)

//Listen
app.listen(port);
console.log('=============================');
console.log('Our band name is PORT:' + port);
console.log('=============================');