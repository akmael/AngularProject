var express = require('express'),
    logger  = require('morgan') ('dev'),
    server  = express();

//heroku switch
var port = process.env.PORT || 8080;


server.use(logger);

//setting home directory
server.use(express.static(__dirname+'/public'));
server.get('/', home);

//setting listner
server.listen(port, listenCallback);


//named functions

function home( req, res){
    res.sendFile('public/html/index.html', {root:__dirname});


}

function listenCallback(){

  console.log('Now listening on port 8080');
}
