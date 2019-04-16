const mongoose = require('mongoose');
const ReviewSchema = require('./reviews');

const FrogSchema = new mongoose.Schema({
	name: {type: String, required: [true, 'Name is required!']},
	url: {type: String, required: [true, 'URL is required!']},
	reviews: [ReviewSchema],
}, {timestamps: true});

mongoose.model('Frog', FrogSchema);
