const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Name is required!']},
    price: {type: Number, required: [true, 'Price is required!']},
	url: {type: String, required: [true, 'URL is required!']},
}, {timestamps: true});

mongoose.model('Product', ProductSchema);
