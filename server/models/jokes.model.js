const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: String,
    line: String,
});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;