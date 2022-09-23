
const Mongoose = require('mongoose');

const staffSchema = new Mongoose.Schema({
    id: {
        type : String,
        require : true
    },

    name: {
        type : String,
        require : true
    },

    jobstatus: {
        type : String,
        require : true
    }
});

const staff = Mongoose.model('StaffDetail', staffSchema);

module.exports = staff;