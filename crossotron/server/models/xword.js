const mongoose = require('mongoose');

const XWordSchema = new mongoose.Schema({
	chars: {type: Array, required: true},
	vowels: {type: Array, required: true},
}, {timestamps: true});

mongoose.model('xword', XWordSchema);
