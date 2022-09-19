const router = require('express').Router();
const Help = require('../models/HelpModel');

router.route('/record').post(async (req, res) => {

    const {
        priority,
        discription,
        message,
        type ,
    } = req.body;

    const newRecord = new Help({
        priority,
        discription,
        message,
        type ,
       
    });
    
    await newRecord.save().then((result)=>{
            res.json(result);
    
    }).catch((err)=>{
            console.log(err);
    })
       
});

module.exports = router;
