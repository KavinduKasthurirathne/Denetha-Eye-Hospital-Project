
const router = require('express').Router();
const Staff = require('../models/StaffModel');

//add new staff member to the database
router.route('/add').post(async (req, res) => {
    const {
        id,
        name,
        jobstatus
    } = req.body;

    const currentDate = Date.now();

    const newStaff = new Staff ({id, name, jobstatus});

    await newStaff.save().then(() => {
        res.status(200).send({status: 'Successfully Added'});
    }).catch((err) => {
        res.status(500).send({status: 'Error: Unsuccessful', error: err.message});
    });
});

//get staff details by giving id of that staff member
router.route('/get/:id').post(async (req, res) => {

    const staffId = req.params.id;

    await Staff.findById(staffId).then((result)=>{
        if(result){
            res.json(result);
        }else {
            res.status(200).send({message: 'Staff Member fetched' , user:staffId});
        }
    }).catch((err) => {
        res.status(500).send({status: 'Error: Staff id not found', error: err.message});
    });
});

//display all the satff details
router.route('/get').post(async (req, res) => {
    await Staff.find().then((result)=>{
        if(result){
            res.json(result);
        }else {
            res.status(200).send({message: 'Cannot find'});
        }
    }).catch((err) => {
        res.status(500).send({status: 'Error: Could not find', error: err.message});
    });
});

//another way to do get method
/*
router.route('/').get((req,res)=>{
    Staff.find().then((staff)=>{
        res.json(staff)
    }).catch((err)=>{
        console.log(err)
    })
})
*/
module.exports = router;