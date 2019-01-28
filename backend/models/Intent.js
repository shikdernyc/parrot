const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const { ExampleIntentSchema } = require('./ExampleIntent');

const intentSchema = new Schema(
  {
    domainID: { type: Schema.Types.ObjectId, ref: 'Domain' },
    intentName: {
      type: String,
      trim: true
    },
    userSays: [{
      type: String,
      trim: true
    }]
    // agentResponses: [String]
  },
  {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
  }
);

const Intent = mongoose.model('Intent', intentSchema);

module.exports = { Intent };
