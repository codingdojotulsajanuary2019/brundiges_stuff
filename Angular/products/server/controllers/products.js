const mongoose = require('mongoose');
const Product = mongoose.model('Product');
var opts = { runValidators: true };

module.exports = {
    serve: (req, res, next) => {
        console.log("Big Chungus");
        
        res.sendFile("C:/Users/Geoff/Documents/GitHub/03 - MEAN/brundiges_stuff/Angular/products/public/dist/public/index.html");
    },
    index: (req, res) => {
        console.log("All products served")
        Product.find({}, (err, products) => {
            if (err) {
                res.json({ message: false, error: err });
            } else {
                res.json({ message: true, products: products });
            }
        });
    },
    create: (req, res) => {
        let newFrog = req.body;
        console.log("Attempting to create new product.", newFrog);

        const products = new Product(newFrog);
        products.save((err) => {
            if (err) {
                res.json({ message: false, error: err });
            } else {
                res.json({ message: true, products: products });
            }
        });
    },
    destroy: (req, res) => {
        const id = req.params.id;
        console.log("Deleting product", req);

        Product.findOneAndDelete({ _id: id }, (err, product) => {
            if (err) {
                res.json({ message: false, error: err });
            } else {
                res.json({ message: true, product: product });
            }
        });
    },
    show: (req, res) => {
        
        const id = req.params.id;
        console.log("Getting product with id " + id);
        Product.findOne({ _id: id }, (err, product) => {
            if (err) {
                res.json({ message: false, error: err });
            } else {
                res.json({ message: true, product: product })
            }
        });
    },
    update: (req, res) => {
        console.log("Updating product " + req.body.name);
        
        Product.update({ _id: req.params.id }, { name: req.body.name, url: req.body.url, price: req.body.price }, opts, function (err, product) {
            // console.log("Recieved updated request: ", req.body);
            if (err) {
                console.log('Errant update request!: ', err);

                res.json({ message: false, error: err });
            } else {
                console.log('Unerring request! Frog updated!');
                res.json({ message: true, product: product });
            }
        });
    },
};
