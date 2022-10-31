const Mongoose = require('mongoose');

const VendorSchema = new Mongoose.Schema({
    vendorcode: String,
    vendorname: String,
    contactno: Number,
    address :String,
    email:String,
    type:String,
    status:String,
});

const vendor = Mongoose.model('vendor', VendorSchema);

module.exports = vendor;