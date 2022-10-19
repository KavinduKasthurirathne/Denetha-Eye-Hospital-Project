const Mongoose = require('mongoose');

const receiptSchema = new Mongoose.Schema({
    name: {
        type : String,
        require : true //backend validation
    },
    
    phone: {
        type : String,
        require : true //backend validation
    },
    
    type: {
        type : String,
        require : true //backend validation
    },

    age: {
        type : Number,
        require : false
    },
    
    date: {
        type : String,
        require : false
    },

    doctor: {
        type : String,
        require : false
    },

    amount: {
        type : String,
        require : false
    },    
});

const receipt = Mongoose.model('receipt', receiptSchema);

module.exports = receipt;


