const Quote = require('./../controllers/quote');

module.exports = (app) => {
	app.get('/', function (req, res) {
		Quote.index(req, res);
	});
	app.get('/all', function (req, res) {
		Quote.all(req, res);
	});
	app.post('/create', Quote.create);
};
