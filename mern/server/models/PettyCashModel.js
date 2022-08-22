const Mongoose = require('mongoose');

const pettyCashSchema = new Mongoose.Schema({
    pcRoot: String,
    vNum: String,
    pcItem: String,
    type: String,
    date: Date,
    amount: String,
    lastEdit: {type: Date, default:Date.now},
    editor: String,
    reserve: String
});

const pettyCashRecord = Mongoose.model('pettyCashRecord', pettyCashSchema);

module.exports = pettyCashRecord;