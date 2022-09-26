const router = require('express').Router();
let meeting = require('../models/MeetingModel');
const { get } = require("mongoose");

//display all meetings
router.route('/').get((req, res) => {
    meeting.find().then((result)=>{
            res.json(result)
    }).catch((err) => {
            res.status(500).send({status: '', error: err.message});
    })
})

//add new meeting to the database
router.route("/add").post((req,res)=>{
     const date = Date(req.body.date);
     const time = req.body.time;
     const host = req.body.host;
     const description = req.body.description;

     const newMeeting = new meeting({
        date,
        time,
        host,
        description
     });

     //js prons
     newMeeting.save().then(()=>{
        res.json("New Meeting is added.")
     }).catch((err)=>{
        console.log(err); 
     });
});

//update meetings
router.route('/update/:meetingDate').put(async (req, res) => {
    
    const updateMeeting = req.params.meetingDate;
    
    //destructure
    const {
        date,
        time,
        host,
        description
    } = req.body;

    //update values
    const updateMeetingDetails = {
        date,
        time,
        host,
        description
    };

    const update = await meeting.findById(updateMeeting, updateMeetingDetails).then((result) => {
        res.status(200).send({message:'Update successful', update: update})
    }).catch((err) => {
        res.status(500).send({status: 'Error: Update unsuccessful', error: err.message});
    });
});

//delete meetings
router.route('/delete/:meetingid').delete(async (req, res) => {
    
    const deleteMeeting = req.params.meetingid;

    await meeting.findByIdAndDelete(deleteMeeting).then((result) => {
        res.status(200).send({message:'Profile Deleted'});
    }).catch((err) => {
        res.status(500).send({status: 'Error: Delete unsuccessful', error: err.message});
    });
});

module.exports = router;