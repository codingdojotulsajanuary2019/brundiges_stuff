const Frogs = require('./../controllers/frogs');

module.exports = (app) => {
	app.get('/frogs', Frogs.index);
	app.get('/frogs/:id', Frogs.show);
	app.post('/frogs', Frogs.create);
	app.put('/frogs/:id', Frogs.update);
    app.delete('/frogs/:id', Frogs.destroy);
    app.put('/reviews/:id', Frogs.comment);
};
