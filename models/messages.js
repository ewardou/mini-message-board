const mongoose = require('mongoose');

const { Schema } = mongoose;

const messageSchema = new Schema({
    user: String,
    text: String,
    added: { type: Date, default: new Date() },
});

module.exports = mongoose.model('messages', messageSchema);
