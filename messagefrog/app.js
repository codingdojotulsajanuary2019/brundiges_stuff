// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
const flash = require('express-flash');

// Requre mongoose and connects to local mongo server
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');

var CommentSchema = new mongoose.Schema({
	name: {type: String, required: true, minLength: 2},
	comment: {type: String, required: true, minLength: 2}
});
var MessageSchema = new mongoose.Schema({
	name: {type: String, required: true, minLength: 2},
	message: {type: String, required: true, minLength: 2},
	comments: [CommentSchema]
});
mongoose.model('Message', MessageSchema);
mongoose.model('Comments', CommentSchema);
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comments');

app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// ### Routes ###

// Root Request
app.get('/', function(req, res) {
	console.log("All Messages\n");

	Message.find({}, function(err, messages) {
		if(err) {
			console.log('Errant request! Messages not retrieved!', err);
		} else {
			console.log('Unerring request! Messages retrieved!');
			// console.log(messages);
			res.render('index', {messages: messages});
		}
	});
});

// Create new message
app.post('/message', function(req, res) {
	console.log("POST DATA:", req.body);
	var message = new Message(req.body);
	
	message.save(function(err) {
		if(err){
			console.log('Errant input! Message not created!', err);
		} else {
			console.log('Unerring input! Message added!');
		  	res.redirect('/');
		}
	});
  });

// Create new comment
app.post('/comment', function(req, res) {
	console.log("Creating new comment\nPOST DATA:", req.body);
	// var comment = new Comment(req.body);
	
	Comment.create(req.body, function(err,data) {
		if(err){
			console.log('Errant input! Comment not created!', err);
			res.redirect('/');
		} else {
			console.log('Unerring input! Comment created!');
			console.log("Message id: " + req.body.message);
			
			Message.findOneAndUpdate({_id: req.body.message}, {$push: {comments: data}}, function(err, data){
				if(err){
					console.log('Errant input! Comment created but not added!', err);
					res.redirect('/');
				}
				else {
					res.redirect('/');
				}
		   })
			
		}
	});
  });

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});
