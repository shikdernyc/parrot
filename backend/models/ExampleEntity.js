const mongoose = require('mongoose');

const ExampleEntitySchema = new mongoose.Schema({
  value: {
    type: String,
    trim: true
  },
  synonyms: [{
    type: String,
    trim: true
  }],
  createTimestamp: Date
});

const ExampleEntity = mongoose.model('ExampleEntity', ExampleEntitySchema);

module.exports = ExampleEntity;
