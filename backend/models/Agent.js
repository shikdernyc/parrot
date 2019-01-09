const mongoose = require('mongoose');

const AgentSchema = new mongoose.Schema({
  id: Number,
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
  useWebhook: Boolean,
  usePostFormat: Boolean,
  domainClassifierThreshold: Number,
  fallbackResponses: [{ type: String, trim: true }],
  status: {
    type: String,
    trim: true
  },
  lastTraining: Date,
  extraTrainingData: Boolean,
  enableModelsPerDomain: Boolean,
  model: {
    type: String,
    trim: true
  }
});

const Agent = mongoose.model('Agent', AgentSchema);

module.exports = Agent;
