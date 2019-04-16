const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
	review: {type: String, default: ""},
	rating: {type: Number, required: [true, 'Rating is required!']},
}, {timestamps: true});

mongoose.model('Review', ReviewSchema);
module.exports = ReviewSchema;
