const Mongoose = require('mongoose');

const HelpSchema = new Mongoose.Schema({
    priority: String,
    discription: String,
    message: String,
    type :String,
});

const help = Mongoose.model('help', HelpSchema);

module.exports = help;