const mongoose = require('mongoose');
const Frog = mongoose.model('Frog');
const Review = mongoose.model('Review');
var opts = { runValidators: true };

module.exports = {
    index: (req, res) => {
        console.log("All frogs served")
        Frog.find({}, (err, frogs) => {
            if (err) {
                res.json({ message: false, error: err });
            } else {
                res.json({ message: true, frogs: frogs })
            }
        });
    },
    create: (req, res) => {
        let newFrog = req.body;
        console.log("Attempting to create new frog.", newFrog);

        const frog = new Frog(newFrog);
        frog.save((err) => {
            if (err) {
                res.json({ message: false, error: err });
            } else {
                res.json({ message: true, frog: frog });
            }
        });
    },
    destroy: (req, res) => {
        const id = req.params.id;
        console.log("Deleting frog", req);

        Frog.findOneAndDelete({ _id: id }, (err, frog) => {
            if (err) {
                res.json({ message: false, error: err });
            } else {
                res.json({ message: true, frog: frog });
            }
        });
    },
    show: (req, res) => {
        const id = req.params.id;
        Frog.findOne({ _id: id }, (err, frog) => {
            if (err) {
                res.json({ message: false, error: err });
            } else {
                res.json({ message: true, frog: frog })
            }
        });
    },
    update: (req, res) => {
        Frog.update({ _id: req.params.id }, { title: req.body.title, description: req.body.description, completed: req.body.completed }, opts, function (err, task) {
            console.log("Recieved updated request: ", req.body);
            if (err) {
                console.log('Errant update request!: ', err);

                res.json({ message: false, error: err });
            } else {
                console.log('Unerring request! Frog updated!');
                res.json({ message: true, frog: frog })
            }
        });
    },
    comment: (req, res) => {
        Review.create(req.body, function (err, data) {
            if (err) {
                console.log('Errant input! Comment not created!', err);
                res.json({ message: false, error: err });
            } else {
                console.log('Unerring input! Comment created!');
                console.log("Message id: ", data);
                console.log("Adding review to frog with id " + req.params.id);

                Frog.findOneAndUpdate({ _id: req.params.id }, { $push: { reviews: data } }, function (err, data) {
                    if (err) {
                        console.log('Errant input! Comment created but not added!', err);
                        res.json({ message: false, error: err });
                    }
                    else {
                        res.json({ message: true, frog: data });
                    }
                });
            }
        });
    },
};
