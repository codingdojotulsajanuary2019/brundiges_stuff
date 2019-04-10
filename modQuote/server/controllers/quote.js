const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');

module.exports = {
	index: function(req, res) {
		console.log("Frog");
		res.render('index');
    },
	all: function(req, res) {
		console.log("Turtles");
		Quote.find({}, function (err, quotes) {
			if (err) {
				console.log('Errant request!: ', err);

				res.redirect('/');
			} else { // else console.log that we did well and then redirect to the root route
				console.log('Unerring request! Quotes retrieved!');
				res.render('all', { quotes: quotes });
			}
		});
    },
	create: (req, res) => {
		console.log("POST DATA:", req.body);
	var quote = new Quote(req.body);
	// var quote = new Quote({name: req.body.name, admin: req.body.admin});
	quote.save(function(err) {
		if(err) {
			console.log('Errant input!', err.errors);
			for(var key in err.errors){
        		req.flash('registration', err.errors[key].message);
            }
			res.redirect('/');
		} else {
			console.log('Unerring input! Quote added!');
		  	res.redirect('/all');
		}
	});
	}
};
