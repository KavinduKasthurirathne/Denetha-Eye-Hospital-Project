const Mongoose = require('mongoose');

const InventorySchema = new Mongoose.Schema({
    Itemcode: String,
    Itemname: String,
    Vendorcode: String,
    Location :String,
    Cost:String,
    Quantity:String,
    // type:String,
    Status:String,
});

const inventory = Mongoose.model('inventory', InventorySchema);

module.exports = inventory;