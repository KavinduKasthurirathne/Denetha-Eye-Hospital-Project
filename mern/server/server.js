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
app.use('/api/account', accountRouter);
const PORouter = require('./routes/PurchaseOrders');
app.use('/api/purchaseOrder', PORouter);
const pettyCashRouter = require('./routes/PettyCashRecords');
app.use('/api/pettyCash', pettyCashRouter);
const patientRouter = require('./routes/Patients');
app.use('/api/patient', patientRouter);
const appoinmentRouter = require('./routes/Appoinment');
app.use('/api/appointment', appoinmentRouter);
<<<<<<< HEAD
const EditappoinmentRouter = require('./routes/EditAppoinment');
app.use('/api/Editappointment', EditappoinmentRouter); 
=======
//const EditappoinmentRouter = require('./routes/EditAppoinment');
//app.use('/api/Editappointment', EditappoinmentRouter); 
>>>>>>> 43aa2c809f1cfe42022a940befd758085d5844cd
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });
}

app.listen(port, () => {
  //Perform a database connection when server start
  mongoose.connect(process.env.ATLAS_URI).then(()=>{
    console.log('connected to mongoDB');
  });
  console.log(`Server is running on port: ${port}`);
});