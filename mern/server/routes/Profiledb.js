
const router = require('express').Router();
const Profiledb = require('../models/ProfileModel');

router.route('/get').post(async (req, res) => {
    await Profiledb.find().then((result)=>{
        if(result){
            res.json(result);
        }else {
            res.status(200).send({message: 'No user'});
        }
    }).catch((err) => {
        res.status(500).send({status: 'Error: Account not found', error: err.message});
    });
});

router.route('/check').post(async (req, res) => {
    await Profiledb.find({id:req.body.id}).then((result)=>{
        if(result){
            res.status(201).send({message: 'ProfileFound'});
        }else {
            res.status(200).send({message: 'NoProfile'});
        }
    }).catch((err) => {
        res.status(500).send({status: 'Error: Account not found', error: err.message});
    });
});

//update profile
router.route('/update/:pid').put(async (req, res) => {
    
    const profileId = req.params.pid;
    
    //destructure
    const {
        id,
        name,
        contactno,
        address,
        jobrole,
        email,
        dob,
        basicSal
    } = req.body;

    //update values
    const updateProfile = {
        id, 
        name, 
        contactno, 
        address, 
        jobrole, 
        email, 
        dob, 
        basicSal
    };

    const update = await Profiledb.findOneAndUpdate(profileId, updateProfile).then((result) => {
        res.status(200).send({message:'Update successful', update: update})
    }).catch((err) => {
        res.status(500).send({status: 'Error: Update unsuccessful', error: err.message});
    });
});

//delete profile
router.route('/delete/:pid').post(async (req, res) => {
    
    const profileId = req.params.pid;

    await Profiledb.findOneAndDelete(profileId).then((result) => {
        res.status(200).send({message:'Profile Deleted'});
    }).catch((err) => {
        res.status(500).send({status: 'Error: Delete unsuccessful', error: err.message});
    });
});

module.exports = router;