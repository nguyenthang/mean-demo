var express = require('express'); // include express framework

var app = express(),
config = require('./config/configure'); // assigned the express framework to app variable.


app.set('port', process.env.PORT || 3000); // get enviroment port and assign to port variable
app.set('address', process.env.IP || 'localhost'); // get enviroment ip assign to address variable

// set folder views for this app
app.set('views', __dirname + '/views');
app = config(app);
console.log("To here");
var port = app.get('port');
// Start webserver
app.listen(port, app.get('address'), function(){
   console.log("Server is running on port ");
});