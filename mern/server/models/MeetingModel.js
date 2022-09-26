
const Mongoose = require('mongoose');

const meetingSchema = new Mongoose.Schema({

    date : {
        type: Date,
        required : true//backend validation
    },

    time: {
        type : String,
        required : true
    },

    host: {
        type : String
    },

    description : {
        type : String
    }
});

const meeting = Mongoose.model('Meeting', meetingSchema);
//document name(table name)-'Meeting' , schema

module.exports = meeting;