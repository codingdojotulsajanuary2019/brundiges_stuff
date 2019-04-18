const mongoose = require('mongoose');
const Team = mongoose.model('Product');
var opts = { runValidators: true };

module.exports = {
    serve: (req, res, next) => {
        console.log("Serving file");
        
        res.sendFile("C:/Users/Geoff/Documents/GitHub/03 - MEAN/brundiges_stuff/Angular/products/public/dist/public/index.html");
    },
    index: (req, res) => {
        console.log("All products served")
        Team.find({}, (err, products) => {
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

        const products = new Team(newFrog);
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

        Team.findOneAndDelete({ _id: id }, (err, product) => {
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
        Team.findOne({ _id: id }, (err, product) => {
            if (err) {
                res.json({ message: false, error: err });
            } else {
                res.json({ message: true, product: product })
            }
        });
    },
    update: (req, res) => {
        console.log("Updating product " + req.body.name);

        Team.findOne({ _id: req.params.id },function (err, product){
            fields = Object.keys(req.body);
            fields.forEach(element => {
                product[element] = req.body[element];
            });
            
            product.save(function(err){
                if (err) {
                    console.log('Errant update request!: ', err);
                    res.json({ message: false, error: err });
                } else {
                    console.log('Unerring request! Product updated!');
                    res.json({ message: true, product: product });
                }
            });
        });
    },
};
