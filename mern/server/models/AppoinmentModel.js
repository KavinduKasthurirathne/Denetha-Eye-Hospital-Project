const Mongoose = require('mongoose');

const AppointmentSchema = new Mongoose.Schema({
    name: String,
    address: String,
    phone: Number,
    age: Number,
    gender :String,
    appoinmentnumber:Number,
    type:String,
    date:Date,
    time:String,
    doctor:String,
});

const appointment = Mongoose.model('appointment', AppointmentSchema);

module.exports = appointment;