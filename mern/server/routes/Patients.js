const router = require('express').Router();
const patient = require('../models/PatientModel');

router.route('/search').post(async (req, res) => {

        patient.find().then((patients)=>{
            res.json(patients);
    
        }).catch((err)=>{
            console.log(err);
        })

});




module.exports = router;


