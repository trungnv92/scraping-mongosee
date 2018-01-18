var app = require('./app');
var port = process.env.PORT || 3000;
//var port = 3001;

var server = app.listen(port, function(){
    console.log('Express server listening on port ' + port);
})
