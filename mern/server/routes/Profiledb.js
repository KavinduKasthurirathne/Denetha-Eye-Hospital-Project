const router = require("express").Router();
const Profiledb = require("../models/ProfileModel");
const { get } = require("mongoose");

router.route("/get").post(async (req, res) => {
  const id = req.body.id;
  await Profiledb.findById(id)
    .then((result) => {
      if (result) {
        res.json(result);
      } else {
        res.status(200).send({ message: "No user" });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ status: "Error: Account not found", error: err.message });
    });
});

router.route("/add").post(async (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const contactno = req.body.contactno;
  const address = req.body.address;
  const jobrole = req.body.jobrole;
  const email = req.body.email;
  const dob = Date(req.body.dob);
  const basicSal = Number(req.body.basicSal);

  const newProfile = new Profiledb({
    id,
    name,
    contactno,
    address,
    jobrole,
    email,
    dob,
    basicSal,
  });
  newProfile
    .save()
    .then(() => {
      res.json("New data is added.");
    })
    .catch((err) => {
      console.log(err);
    });
});

//update profile
router.route("/update/:pid").put(async (req, res) => {
  const id = req.body.id;

  await Profiledb.findById(id)
    .then((result) => {
      if (result) {
        res.json(result);
      } else {
        res.status(200).send({ message: "No user" });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ status: "Error: Account not found", error: err.message });
    });

  //destructure
  const { contactno, address, email, dob, basicSal } = req.body;

  //update values
  const updateProfile = {
    contactno,
    address,
    email,
    dob,
    basicSal,
  };

  const update = await Profiledb.findOneAndUpdate(profileId, updateProfile)
    .then((result) => {
      res.status(200).send({ message: "Update successful", update: update });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ status: "Error: Update unsuccessful", error: err.message });
    });
});

//delete profile
router.route("/delete/:pid").post(async (req, res) => {
  const profileId = req.params.pid;

  await Profiledb.findOneAndDelete(profileId)
    .then((result) => {
      res.status(200).send({ message: "Profile Deleted" });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ status: "Error: Delete unsuccessful", error: err.message });
    });
});

module.exports = router;
