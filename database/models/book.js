const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    cost: {type: String, required: true},
    published_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('book', bookSchema);
