const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
	name: { type: String, minLength: [2, "Name must be longer than two characters"], required: [true, "Name is required"] },
	quote: { type: String, maxLength: [255, "Quote must be no greater than 255 characters"], required: [true, "Quote is required"] },
}, { timestamps: true });

mongoose.model('Quote', QuoteSchema);