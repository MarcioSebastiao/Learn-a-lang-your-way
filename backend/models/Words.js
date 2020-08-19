const { Schema, model } = require('mongoose');

const WordsSchema = new Schema({
    Words: {
        type: String,
        required: true,
    },
    Pronounce: String,
    Type: String,
    Definition: String,
    Sentences: {
        type: [String],
        required: true,
    },
}, {
    timestamps: true,
})

module.exports = model('WordsData', WordsSchema);