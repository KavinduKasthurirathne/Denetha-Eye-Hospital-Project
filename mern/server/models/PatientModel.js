const Mongoose = require('mongoose');

const patientSchema = new Mongoose.Schema({
    name: String,
    phone: String,
    age: Number
});

const patient = Mongoose.model('patient', patientSchema);

module.exports = patient;