// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');

// Requre mongoose and connects to local mongo server
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, './public/dist/public/')));

// ### Routes ###

// Root Request
app.all("*", (req,res,next) => {
    console.log("Called");
    res.sendFile(path.resolve("./public/dist/public/index.html"));
  });

// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
});
