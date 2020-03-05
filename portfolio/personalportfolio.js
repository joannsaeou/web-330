var express = require("express");
var http = require("http");

var app = express(); // to start a new express application


//create middleware function



//request handler function
app.get("/home", function(request, respond) {

    respond.end("Welcome to my personal portfolio!");

});

app.get("/about", function(request, respond) {

    respond.end("Welcome to my about page");
});

app.get("/contact", function(request, response) {

    response.end("Welcome to the contact page!");

});


//static file middleware 
app.use(function(request, response) {

    response.statusCode = 404;

    response.end("404!");

});



//create a server application to listen on port 8080

http.createServer(app).listen(8080);