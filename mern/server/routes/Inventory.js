const router = require('express').Router();
const inventory = require('../models/Inventory');

router.route('/record').post(async (req, res) => {

    const {
        itemcode,
        itemname,
        vendorcode,
        location,
        quantity,
        cost,
        type,
        status,
    } = req.body;

    const newRecord = new inventory({
        itemcode,
        itemname,
        vendorcode,
        location,
        quantity,
        cost,
        type,
        status,});
    
       await newRecord.save().then((result)=>{
            res.json(result);
    
        }).catch((err)=>{
            console.log(err);
        })
       
});
module.exports = router;