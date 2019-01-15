const mongoose = require('mongoose');

const IntentEntitySchema = new mongoose.Schema({
  end: Number,
  value: {
    type: String,
    trim: true
  },
  entity: {
    type: String,
    trim: true
  },
  entityID: Number,
  extractor: {
    type: String,
    trim: true
  }
});

module.exports = { IntentEntitySchema };
