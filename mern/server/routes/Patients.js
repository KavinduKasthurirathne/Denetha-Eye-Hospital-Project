const router = require('express').Router();
const patient = require('../models/PatientModel');

router.route('/search').post(async (req, res) => {

        patient.find().then((patients)=>{
            res.json(patients);
    
        }).catch((err)=>{
            console.log(err);
        })

});


router.route('/insert').post(async(req, res) => {

    const {
        name,
        age,
        gender,
        dob,
        address,
        phone,
        gname,
        gnumber,
        checkboxCall,
        checkboxMsg,
        remarks
    } = req.body;

    const addpatient = new patient ({name, age, gender, dob, address,
                                    phone, gname, gnumber, checkboxCall,
                                    checkboxMsg, remarks});

    await addpatient.save().then(() => {
        res.json("Receipt added");
    }).catch((err) => {
        console.log(err);
    });
    
});




module.exports = router;


