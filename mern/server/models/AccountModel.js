const Mongoose = require('mongoose');

const accountSchema = new Mongoose.Schema({
    name: String,
    username: String,
    password: String,
    role: String
});

const account = Mongoose.model('account', accountSchema);

module.exports = account;