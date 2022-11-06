const Mongoose = require("mongoose");

const profileSchema = new Mongoose.Schema({
  contactno: {
    type: String,
    require: true,
  },

  address: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    require: true,
  },

  dob: {
    type: String,
  },

  id: {
    type: String,
    require: true,
  },
});

const profile = Mongoose.model("Profile", profileSchema);

module.exports = profile;
