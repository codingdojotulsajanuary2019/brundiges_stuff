const mongoose = require('mongoose');
const Task = mongoose.model('Task');
var opts = { runValidators: true };

module.exports = {
    index: (req, res) => {
        console.log("Index page served")
        Task.find({}, (err, tasks) => {
            if (err) {
                res.json({ message: false, error: err });
            } else {
                res.json({ message: true, tasks: tasks })
            }
        });
    },
    create: (req, res) => {
        let newTask = req.body;
        console.log("Attempting to create new task.", newTask);

        const task = new Task(newTask);
        task.save((err) => {
            if (err) {
                res.json({ message: false, error: err });
            } else {
                res.json({ message: true, task: task });
            }
        });
    },
    destroy: (req, res) => {
        const id = req.params.id;
        console.log("Deleting task", req);
        
        Task.findOneAndDelete({ _id: id }, (err, task) => {
            if (err) {
                res.json({ message: false, error: err });
            } else {
                res.json({ message: true, task: task });
            }
        });
    },
    show: (req, res) => {
        const id = req.params.id;
        Task.findOne({ _id: id }, (err, task) => {
            if (err) {
                res.json({ message: false, error: err });
            } else {
                res.json({ message: true, task: task })
            }
        });
    },
    update: (req, res) => {
        Task.update({ _id: req.params.id }, { title: req.body.title, description: req.body.description, completed: req.body.completed }, opts, function (err, task) {
            console.log("Recieved updated request: ", req.body);
            if (err) {
                console.log('Errant update request!: ', err);

                res.json({ message: false, error: err });
            } else {
                console.log('Unerring request! Task updated!');
                res.json({ message: true, task: task })
            }
        });
    }
};
