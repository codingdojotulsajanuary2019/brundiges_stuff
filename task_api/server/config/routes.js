const Tasks = require('./../controllers/tasks');

module.exports = (app) => {
	app.get('/', Tasks.index);
	app.get('/task/:id', Tasks.show);
	app.post('/task', Tasks.create);
	app.put('/task/:id', Tasks.update);
	app.delete('/task/:id', Tasks.destroy);
};
