const mongoose = require('mongoose');
const Task = mongoose.model('Task');
var opts = { runValidators: true };

module.exports = {
	index: (req, res) => {
		console.log("Frogs.")
		Task.find({}, (err, tasks) => {
			if (err) {
				res.json({ message: false, error: err });
			} else {
				res.json({ message: true, tasks: tasks })
			}
		});
	},
	create: (req, res) => {
		console.log(req.method);
		console.log(req.params.name);
		let newTask;
		if (req.method == 'POST') {
			newTask = req.body;
		} else {
			newTask = { name: req.params.name }
		}
		const task = new Task(newTask);
		task.save((err) => {
			if (err) {
				res.json({ message: false, error: err });
			} else {
				res.redirect('/');
			}
		});
	},
	destroy: (req, res) => {
		const id = req.params.id;
		Task.findOneAndDelete({ _id: id }, (err, task) => {
			if (err) {
				res.json({ message: false, error: err });
			} else {
				res.redirect('/');
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
			console.log("Recieved updated request: ",req.body);
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
