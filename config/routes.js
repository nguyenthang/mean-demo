var express = require('express'),
       router = express.Router(),
       home = require('../controllers/index');

   module.exports = function(app) {
       router.get('/', home.index);
       app.use(router);
};
