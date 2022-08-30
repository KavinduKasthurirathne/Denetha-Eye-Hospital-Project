const Mongoose = require('mongoose');

const patientSchema = new Mongoose.Schema({
    name: String,
    phone: Number,
    age: Number
});

const patient = Mongoose.model('patient', patientSchema);

module.exports = patient;