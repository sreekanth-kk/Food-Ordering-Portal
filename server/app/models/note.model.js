const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
            name: String,
            price:String,
            description:String,
            image: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);
