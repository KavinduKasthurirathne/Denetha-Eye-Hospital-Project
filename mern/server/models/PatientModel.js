const Mongoose = require('mongoose');

const patientSchema = new Mongoose.Schema({
    name: String,
    phone: String,
    age: Number,
    gender: String,
    dob: String,
    address: String,
    gname: String,
    gnumber: Number,
    checkboxCall: String,
    checkboxMsg: String,
    remarks: String
});

const patient = Mongoose.model('patient', patientSchema);

module.exports = patient;