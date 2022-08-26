const { Decimal128 } = require('mongodb');
const Mongoose = require('mongoose');

const patientSchema = new Mongoose.Schema({
    name: String,
    phone: String,
    age: Decimal128
});

const patient = Mongoose.model('patient', patientSchema);

module.exports = patient;