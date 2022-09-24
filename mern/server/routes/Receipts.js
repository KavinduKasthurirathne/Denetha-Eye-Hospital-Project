const router = require('express').Router();
const receipt = require('../models/ReceiptModel');

router.route('/insert').post(async (req, res) => {

    const {
        name,
        phone,
        type,
        age,
        date,
        doctor,
        amount,
    } = req.body;

    const receipt1 = new receipt ({name, phone, type, age, date, doctor, amount});

    await receipt1.save().then(() => {
        res.json("Receipt added");
    }).catch((err) => {
        console.log(err);
    });

});

module.exports = router;


