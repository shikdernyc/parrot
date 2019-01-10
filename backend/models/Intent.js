const mongoose = require('mongoose');
const ExampleIntent = require('./ExampleIntent');

const IntentSchema = new mongoose.Schema({
  agent_id: {
    type: String,
    trim: true
  },
  domain_id: {
    type: String,
    trim: true
  },
  intentName: {
    type: String,
    trim: true
  },
  examples: [ExampleIntent.schema],
  useWebhook: Boolean,
  usePostFormat: Boolean,
  createTimestamp: Date
});

const Intent = mongoose.model('Intent', IntentSchema);

module.exports = Intent;
