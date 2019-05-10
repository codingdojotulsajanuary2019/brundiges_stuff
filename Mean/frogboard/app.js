// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('express-flash');

// Require mongoose and connects to local mongo server
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');

var FrogSchema = new mongoose.Schema({
	name: { type: String, required: [true, "Name must be provided!"], minLength: 2 },
	color: { type: String, required: [true, "Color must be provided!"], minLength: 2 },
	stage: { type: String, required: [true, "Stage must be provided!"], minLength: 2 },
	roundness: { type: Number, required: [true, "Roundness must be provided!"] },
},
	{
		timestamps: true
	});
mongoose.model('Frog', FrogSchema);
var Frog = mongoose.model('Frog');
var opts = { runValidators: true };

app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(session({
	secret: 'frog',
	resave: false,
	saveUninitialized: true,
	// cookie: { maxAge: 60000 }
}));
app.use(flash());

// ### Routes ###

// Root Request
app.get('/', function (req, res) {
	console.log("All Frogs\n");

	Frog.find({}, function (err, frogs) {
		if (err) {
			console.log('Errant request!: ', err);
		} else {
			console.log('Unerring request! Frogs retrieved!');
			// console.log(frogs);
			res.render('all', { frogs: frogs });
		}
	});
});

// Renders page used to create new frogs
app.get('/frogs/new', function (req, res) {
	console.log("New frog");
	res.render('create');
});

// Renders page used to show individual frog
app.get('/frogs/show/:id', function (req, res) {
	console.log("Showing frog with id " + req.params.id);
	Frog.find({ _id: req.params.id }, function (err, frog) {
		if (err) {
			console.log('Errant request showing frog!: ', err);
			res.redirect('/');
		} else {
			console.log('Unerring request! Frog retrieved!');
			// console.log(frog[0]);
			res.render('show', { frog: frog[0] });
		}
	});
});

// Renders page used to edit frog
app.get('/frogs/edit/:id', function (req, res) {
	console.log("Editing frog with id " + req.params.id);
	Frog.find({ _id: req.params.id }, function (err, frog) {
		if (err) {
			console.log('Errant request!: ', err);
			res.redirect('/');
		} else {
			console.log('Unerring request! Frog retrieved!');
			// console.log(frog[0]);
			res.render('edit', { frog: frog[0] });
		}
	});
});

// Create new frog
app.post('/frogs', function (req, res) {
	console.log("POST DATA:", req.body);
	var frog = new Frog(req.body);

	frog.save(function (err) {
		if (err) {
			console.log('Errant input!', err);
			for (var key in err.errors) {
				req.flash('frog', err.errors[key].message);
			}
			res.redirect('/frogs/new');
		} else {
			console.log('Unerring input! Frog added!');
			res.redirect('/');
		}
	});
});

// Edit frog
app.post('/frogs/update/:id', function (req, res) {
	console.log("Updating frog with id " + req.params.id);

	Frog.update({ _id: req.params.id }, { name: req.body.name, color: req.body.color, stage: req.body.stage, roundness: req.body.roundness }, opts, function (err, frog) {
		if (err) {
			console.log('Errant update request!: ', err);
			for (var key in err.errors) {
				req.flash('edit', err.errors[key].message);
			}
			res.redirect('/frogs/edit/' + req.params.id);
		} else {
			console.log('Unerring request! Frog updated!', frog);
			res.redirect('/');
		}
	});
});

// Delete frog
app.post('/frogs/remove/:id', function (req, res) {
	console.log("Deleting frog with id " + req.params.id);
	Frog.remove({ _id: req.params.id }, function (err, frog) {
		if (err) {
			console.log('Errant deletion request!: ', err);
			res.redirect('/');
		} else {
			console.log('Unerring request! Frog deleted!', frog);
			res.redirect('/');
		}
	});
});

// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
	console.log("listening on port 8000");
});
