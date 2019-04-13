const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
	title: {type: String, required: [true, 'Title is required!']},
	description: {type: String, default: ""},
	completed: {type: Boolean, default: false},
}, {timestamps: true});

mongoose.model('Task', TaskSchema);