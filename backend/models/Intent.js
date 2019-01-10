const mongoose = require('mongoose');
const ExampleIntent = require('./ExampleIntent');

const IntentSchema = new mongoose.Schema({
  agent: {
    type: String,
    trim: true
  },
  domain: {
    type: String,
    trim: true
  },
  intentName: {
    type: String,
    trim: true
  },
  examples: [ExampleIntent.schema],
  useWebhook: Boolean,
  usePostFormat: Boolean
});

const Intent = mongoose.model('Intent', IntentSchema);

module.exports = Intent;
