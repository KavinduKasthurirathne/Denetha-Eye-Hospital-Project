const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appTypeSchema = new Schema({
  appType: {
    type: String,
    required: true,
    unique: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const AppType = mongoose.model('AppType', appTypeSchema);

module.exports = AppType;