const mongoose = require('mongoose');

const AgentSchema = new mongoose.Schema(
  {
    agentName: {
      type: String,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    language: {
      type: String,
      trim: true
    },
    timezone: {
      type: String,
      trim: true
    },
    fallbackResponses: [{ type: String, trim: true }]
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
);

const Agent = mongoose.model('Agent', AgentSchema);

module.exports = Agent;
