const mongoose = require("mongoose");

const synonymSchema = new mongoose.Schema({
  type: String,
  trim: true
});

module.exports = { synonymSchema };
