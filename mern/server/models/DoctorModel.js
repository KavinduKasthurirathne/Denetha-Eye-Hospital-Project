const Mongoose = require('mongoose');

const doctorSchema = new Mongoose.Schema({

    name : {
        type: String,
        required : true
    },

    email: {
        type: String,
        required : true
    },

    mobile: {
        type: Number
    },

    specialization : {
        type: String
    },

    desc : {
        type: String
    }
});

const doctor = Mongoose.model('doctor', doctorSchema);

module.exports = doctor;