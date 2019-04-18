const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Name is required!']},
    position: {type: String, default: ""},
	games: {type: Array, default: [0,0,0]},
}, {timestamps: true});

mongoose.model('Product', ProductSchema);
