const XWords = require('../controllers/xword');

module.exports = (app) => {
	app.get('/xwords', XWords.index);
    app.get('/xwords/str/:str', XWords.getWords);
    app.get('/xwords/:id', XWords.show);
	app.post('/xwords', XWords.create);
	app.put('/xwords/:id', XWords.update);
    app.delete('/xwords/:id', XWords.destroy);
};
