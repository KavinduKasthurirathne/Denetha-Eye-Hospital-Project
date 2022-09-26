const router = require('express').Router();
const receipt = require('../models/ReceiptModel');

router.route('/insert').post(async (req, res) => {

    const {name, phone, type, age, date, doctor, amount} = req.body;

    const receipt1 = new receipt ({name, phone, type, age, date, doctor, amount});

    await receipt1.save().then(() => {
        res.json("Receipt added");
    }).catch((err) => {
        console.log(err);
    });

});

router.route('/update/:id').put(async(req,res) =>{
    let receiptId = req.params.id;
    const { name, phone, type, age, date, doctor, amount,} = req.body;

    const updateReceipt = {
        name, phone, type, age, date, doctor, amount
    }

    await receipt.findByIdAndUpdate(receiptId, updateReceipt).then(() => {
        res.json("Receipt updated");
    }).catch((err) => {
        console.log(err);
    }
        
    )
})

module.exports = router;


