const router = require('express').Router();
const Appoinment = require('../models/AppoinmentModel');

router.route('/record').post(async (req, res) => {

    const {
        name,
        address,
        phone,
        age,
        gender,
        appoinmentnumber,
        type,
        date,
        time,
        doctor,
    } = req.body;

    const newRecord = new Appoinment({
        name,
        address,
        phone,
        age,
        gender,
        appoinmentnumber,
        type,
        date,
        time,
        doctor,});
    
       await newRecord.save().then((result)=>{
            res.json(result);
    
        }).catch((err)=>{
            console.log(err);
        })
       
});



module.exports = router;