const mongoose = require('mongoose');
const { ExampleEntitySchema } = require('./ExampleEntity');

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
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
);

const Entity = mongoose.model('Entity', EntitySchema);

module.exports = { Entity };
