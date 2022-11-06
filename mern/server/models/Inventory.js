const Mongoose = require('mongoose');

const InventorySchema = new Mongoose.Schema({
    Itemcode: String,
    Itemname: String,
    Vendocode: String,
    Location :String,
    Cost:String,
    // type:String,
    Status:String,
});

const inventory = Mongoose.model('inventory', InventorySchema);

module.exports = inventory;