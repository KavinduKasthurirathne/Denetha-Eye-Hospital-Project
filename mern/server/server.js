const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const mongoose = require('mongoose');

//routes
const accountRouter = require('./routes/Accounts');
app.use('/account', accountRouter);
const PORouter = require('./routes/PurchaseOrders');
app.use('/purchaseOrder', PORouter);
const pettyCashRouter = require('./routes/PettyCashRecords');
app.use('/pettyCash', pettyCashRouter);
const patientRouter = require('./routes/Patients');
app.use('/patient', patientRouter);
 
app.listen(port, () => {
  //Perform a database connection when server start
  mongoose.connect(process.env.ATLAS_URI).then(()=>{
    console.log('connected to mongoDB');
  });
  console.log(`Server is running on port: ${port}`);
});