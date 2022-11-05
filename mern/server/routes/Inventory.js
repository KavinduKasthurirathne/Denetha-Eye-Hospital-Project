const router = require('express').Router();
const inventory = require('../models/Inventory');
router.route('/record').post(async (req, res) => {

    const {
        itemcode,
        itemname,
        vendorcode,
        location,
        quantity,
        cost,
        type,
        status,
    } = req.body;

    const newRecord = new inventory({
        itemcode,
        itemname,
        vendorcode,
        location,
        quantity,
        cost,
        type,
        status,});
    
       await newRecord.save().then((result)=>{
            res.json(result);
    
        }).catch((err)=>{
            console.log(err);
        })

});

//Retriew data from database
router.route("/").get((req,res)=>{
    inventory.find().then((inventory)=>{
        res.json(inventory)
    }).catch((err)=>{
        console.log(err);
    })
})
//update data
router.route("/update/:pid").put(async(req,res)=>{
    let sid = req.params.pid;
    //destructure
    const{itemcode,
        itemname,
        vendorcode,
        location,
        quantity,
        cost,
        type,
        status} = req.body;

    const updatedata = {
        itemcode,
        itemname,
        vendorcode,
        location,
        quantity,
        cost,
        type,
        status
    }

    const update = await inventory.findByIdAndUpdate(sid,updatedata)
    .then(()=>{
        res.status(200).send({status:"Updated Inventory details"})  
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
        })

    })

router.route("/delete/:pid").delete(async(req,res)=>{
let sid = req.params.pid;

await inventory.findByIdAndDelete(sid).then(()=>{
    res.status(200).send({status:"Details Deleted"});
}).catch((err)=>{
    console.log(err.message);
    res.status(500).send({status:"Error with deleting user",error:err.message})
})

})

router.route("/get/:pid").get(async (req,res)=>{
let sid = req.params.pid;
const user = await surgery1.findById(sid).then(()=>{
    res.status(200).send({status:"User fetched"})
}).catch((err)=>{
    console.log(err.message);
    res.status(500).send({status:"Error with get user",error:err.message});

})
})

module.exports = router;
