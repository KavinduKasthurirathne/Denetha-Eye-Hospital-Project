const Mongoose = require('mongoose');

const purchaseOrderSchema = new Mongoose.Schema({
    poRoot: String,
    poNumber: Number,
    vendor: String,
    date: Date,
    lastEdit: {type: Date, default:Date.now},
    editor: String,
    mode: String,
    items: String
});

const purchaseOrder = Mongoose.model('purchaseOrder', purchaseOrderSchema);

module.exports = purchaseOrder;