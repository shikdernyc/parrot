const mongoose = require('mongoose');

const synonymSchema = new mongoose.Schema({
  synonym: {
    type: String,
    trim: true
  }
});

module.exports = { synonymSchema };
