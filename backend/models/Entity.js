const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const { ExampleEntitySchema } = require('./ExampleEntity');

const EntitySchema = new mongoose.Schema(
  {
    agentID: {
      type: String,
      trim: true
    },
    entityName: {
      type: String,
      trim: true
    },
    examples: [ExampleEntitySchema],
    regex: {
      type: String,
      trim: true
    },
    type: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
  }
);

const Entity = mongoose.model('Entity', EntitySchema);

module.exports = { Entity };
