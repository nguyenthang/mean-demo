/*var express = require('express'),
    router = express.Router(),
    index = require('../controllers/index');*/
    
module.exports = function(app){
  //app.get('/', index.home);
  app.get('/', function(req, res){
    res.render('index', {title: 'Running export function'});
  });
  
  //app.use(router);
};