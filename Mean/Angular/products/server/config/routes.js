const Products = require('../controllers/products');

module.exports = (app) => {
    app.get('/api/products', Products.index);
	app.get('/api/products/:id', Products.show);
	app.post('/api/products', Products.create);
	app.put('/api/products/:id', Products.update);
    app.delete('/api/products/:id', Products.destroy);
    app.all('*', Products.serve);
};
