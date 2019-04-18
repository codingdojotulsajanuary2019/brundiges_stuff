const Notes = require('../controllers/notes');

module.exports = (app) => {
    app.get('/api/notes', Notes.index);
	app.get('/api/notes/:id', Notes.show);
	app.post('/api/notes', Notes.create);
	app.put('/api/notes/:id', Notes.update);
    app.delete('/api/notes/:id', Notes.destroy);
    app.all('*', Notes.serve);
};
