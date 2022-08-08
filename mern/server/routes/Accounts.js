const router = require('express').Router();
const account = require('../models/AccountModel');
const bcrypt = require('bcryptjs');

router.route('/add').post(async (req, res) => {
    const {name, username, password, role} = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newAccount = new account({name, username, password: hash, role});

    await newAccount.save().then(() => {
        res.status(200).send({status: 'Account added'});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: 'Error: Account not added', error: err});
    });

});

router.route('/check').post(async (req, res) => {
    const {username, password} = req.body;

    await account.find({username}).then((result)=>{
        if(result[0]){
            if(bcrypt.compareSync(password, result[0].password)){
                res.json(result);
            }else{
                res.status(200).send({message: 'invalidPass'});
            }
        }else {
            res.status(200).send({message: 'invalidUser'});
        }
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: 'Error: Account not fount', error: err});
    });
});

module.exports = router;

