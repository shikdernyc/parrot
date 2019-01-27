const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const { ExampleIntentSchema } = require('./ExampleIntent');

const intentSchema = new Schema(
  {
    domainID: {
      type: String,
      trim: true
    },
    intentName: {
      type: String,
      trim: true
    },
    userSays: [String]
    // agentResponses: [String]
  },
  {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
  }
);

const Intent = mongoose.model('Intent', intentSchema);

module.exports = { Intent };
