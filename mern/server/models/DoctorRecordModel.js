const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recordSchema = new Schema({
  docName: { type: String, required: true },
  appType: { type: String, required: true },
  totalPatients: { type: Number, required: true },
  charge: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const DoctorRecord = mongoose.model('DotorRecords', recordSchema);

module.exports = DoctorRecord;