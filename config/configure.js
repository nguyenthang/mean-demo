var routes = require('./routes'),
    ejs = require('ejs'),
    exhbs = require('express-handlebars');
    
module.exports = function(app){
    routes(app);
    
    var views = app.get('views');
    
    var handlebars = exhbs.create({
        defaultLayout: 'main',
        extname: '.html',
        partialsDir: [views + '/partials', views + '/commons'],
        layoutsDir: views + '/layouts'
    });
    
    app.engine('html', handlebars.engine);
    app.set('view engine', 'html');

    console.log("Debug 1");
    return app;
};