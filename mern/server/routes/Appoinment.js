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

        router.route("/delete/:pid").delete(async(req,res)=>{
            let sid = req.params.pid;
            await Appoinment.findByIdAndDelete(sid).then(()=>{
                res.status(200).send({status:"Details Deleted"});
            }).catch((err)=>{
                console.log(err.message);
                res.status(500).send({status:"Error with deleting user",error:err.message})
        })
        })
    
        router.route("/").get((req,res)=>{
            Appoinment.find().then((result)=>{
                res.json(result)
            }).catch((err)=>{
                console.log(err);
            })
        })
           
    });
 





module.exports = router;