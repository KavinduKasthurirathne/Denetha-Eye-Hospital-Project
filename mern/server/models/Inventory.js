const Mongoose = require('mongoose');

const InventorySchema = new Mongoose.Schema({
    itemcode: String,
    itemname: String,
    vendocode: String,
    location :String,
    cost:Number,
    type:String,
    status:String,
});

const inventory = Mongoose.model('inventory', InventorySchema);

module.exports = inventory;