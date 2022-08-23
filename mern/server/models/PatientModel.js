const Mongoose = require('mongoose');

const patientSchema = new Mongoose.Schema({
    name: String,
    phone: String,
    age: String
});

const patient = Mongoose.model('patient', accountSchema);

module.exports = patient;