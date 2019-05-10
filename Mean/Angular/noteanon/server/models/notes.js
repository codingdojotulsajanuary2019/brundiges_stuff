const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    note: {type: String, required: [true, 'Note is required!']},
}, {timestamps: true});

mongoose.model('Note', NoteSchema);
