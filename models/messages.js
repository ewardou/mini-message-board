const mongoose = require('mongoose');
require('dotenv').config();

const { Schema } = mongoose;

const messageSchema = new Schema({
    user: String,
    text: String,
    added: { type: Date, default: new Date() },
});

mongoose.set('strictQuery', false);

const mongoDB = process.env.DB_URL;

async function getModel() {
    try {
        const connection = await mongoose.connect(mongoDB);
        console.log('Connected to database');
        return connection.model('messages', messageSchema);
    } catch (e) {
        console.log(e);
    }
}

module.exports = getModel;
