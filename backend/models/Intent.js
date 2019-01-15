const mongoose = require('mongoose');
const { ExampleIntentSchema } = require('./ExampleIntent');

const IntentSchema = new mongoose.Schema(
  {
    agentID: {
      type: String,
      trim: true
    },
    domainID: {
      type: String,
      trim: true
    },
    intentName: {
      type: String,
      trim: true
    },
    examples: [ExampleIntentSchema]
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
);

const Intent = mongoose.model('Intent', IntentSchema);

module.exports = { Intent };
