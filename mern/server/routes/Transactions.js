const router = require('express').Router();
const receipt = require('../models/ReceiptModel');

router.route('/get').post(async (req, res) => {
    const date = req.body.date;

    await receipt.find({date}).then((result) => {
        res.json(result);
    }).catch(err => console.log(err));
});

module.exports = router;