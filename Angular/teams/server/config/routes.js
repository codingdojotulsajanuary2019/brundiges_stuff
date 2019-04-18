const Players = require('../controllers/products');

module.exports = (app) => {
    app.get('/api/players', Players.index);
	app.get('/api/players/:id', Players.show);
	app.post('/api/players', Players.create);
	app.put('/api/players/:id', Players.update);
    app.delete('/api/players/:id', Players.destroy);
    app.all('*', Players.serve);
};
