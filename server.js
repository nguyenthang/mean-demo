var express = require('express'), // include express framework
config = require('./config/configure'), // assigned the express framework to app variable.
app = express();

app.set('port', process.env.PORT || 3000); // get enviroment port and assign to port variable
app.set('address', process.env.IP || 'localhost'); // get enviroment ip assign to address variable

// set folder views for this app
app.set('views', __dirname + '/views');

console.log("To here");
var port = app.get('port');
app = config(app);
// Start webserver
app.listen(port, app.get('address'), function(){
   console.log("Server is running on port ");
});
