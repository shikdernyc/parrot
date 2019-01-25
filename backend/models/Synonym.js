const mongoose = require('mongoose');

const SynonymSchema = new mongoose.Schema({
  synonym: {
    type: String,
    trim: true
  }
});

module.exports = { SynonymSchema };
