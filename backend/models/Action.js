const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const { ExampleIntentSchema } = require('./ExampleIntent');

const actionSchema = new Schema(
  {
    domainID: { type: Schema.Types.ObjectId, ref: 'Domain' },
    actionName: {
      type: String,
      trim: true
    },
    // userSays: [String]
    agentResponses: [{
      type: String,
      trim: true
    }]
  },
  {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
  }
);

const Action = mongoose.model('Action', actionSchema);

module.exports = { Action };
