const router = require("express").Router();
let Staff = require("../models/StaffModel");
const { get } = require("mongoose");

//add new staff member to the database
// router.route('/add').post(async (req, res) => {
//     const {
//         id,
//         name,
//         jobstatus
//     } = req.body;

//     const currentDate = Date.now();

//     const newStaff = new Staff ({id, name, jobstatus});

//     await newStaff.save().then(() => {
//         res.status(200).send({status: 'Successfully Added'});
//     }).catch((err) => {
//         res.status(500).send({status: 'Error: Unsuccessful', error: err.message});
//     });
// });

router.route("/add").post((req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const jobStatus = req.body.jobStatus;

  const newStaff = new Staff({
    id,
    name,
    jobStatus,
  });

  newProfile
    .save()
    .then(() => {
      res.json("New Profile is added.");
    })
    .catch((err) => {
      console.log(err);
    });
});

//get staff details by giving id of that staff member
router.route("/get/:id").post(async (req, res) => {
  const staffId = req.params.id;

  await Staff.findById(staffId)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ status: "Error: Staff id not found", error: err.message });
    });
});

//display all the satff details
router.route("/").get((req, res) => {
  Staff.find()
    .then((staff) => {
      res.json(staff);
    })
    .catch((err) => {
      res.status(500).send({ status: "", error: err.message });
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
