const mongoose = require('mongoose');
const { ExampleIntentSchema } = require('./ExampleIntent');

const intentSchema = new mongoose.Schema(
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
    userSays: [String],
    agentResponses: [String]
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
);

const Intent = mongoose.model('Intent', intentSchema);

module.exports = { Intent };
