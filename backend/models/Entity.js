const mongoose = require('mongoose');
const ExampleEntity = require('./ExampleEntity');

const EntitySchema = new mongoose.Schema({
  agent_id: {
    type: String,
    trim: true
  },
  entityName: {
    type: String,
    trim: true
  },
  uiColor: {
    type: String,
    trim: true
  },
  examples: [ExampleEntity.schema],
  regex: {
    type: String,
    trim: true
  },
  type: {
    type: String,
    trim: true
  },
  createTimestamp: Date
});

const Entity = mongoose.model('Entity', EntitySchema);

module.exports = Entity;
