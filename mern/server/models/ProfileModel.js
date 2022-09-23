
const Mongoose = require('mongoose');

const profileSchema = new Mongoose.Schema({
    id: {
        type : String,
        require : true
    },

    name: {
        type : String,
        require : true
    },

    contactno: {
        type : String,
        require : true
    },

    address: {
        type : String,
        require : true
    },

    jobrole: {
        type : String,
        require : true
    },

    email: {
        type : String,
        require : true
    },

    dob: {
        type : Date,
    },

    basicSal: {
        type : Number,
        require : true
    }
});

const profile = Mongoose.model('Profile',profileSchema);

module.exports = profile;