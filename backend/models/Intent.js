const mongoose = require('mongoose');
const { ExampleIntentSchema } = require('./ExampleIntent');

const IntentSchema = new mongoose.Schema(
  {
    agentID: {
      type: Number,
      trim: true
    },
    domainID: {
      type: Number,
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
