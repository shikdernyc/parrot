const mongoose = require('mongoose');

const ActionSchema = new mongoose.Schema(
  {
    actionName: {
      type: String,
      trim: true,
      required: true
    },
    description: {
      type: String,
      trim: true,
      required: true
    },
    agent_id: {
      type: String,
      trim: true
    },
    // language: {
    //   type: String,
    //   trim: true
    // },
    // TODO: Refactor to it's own schema
    templates: [{ type: String, trim: true }]
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
);

const Action = mongoose.model('Action', ActionSchema);

module.exports = { Action };
