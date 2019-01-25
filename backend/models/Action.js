const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const { ExampleIntentSchema } = require('./ExampleIntent');

const actionSchema = new Schema(
  {
    agentID: {
      type: String,
      trim: true
    },
    // domainID: {
    //   type: String,
    //   trim: true
    // },
    actionName: {
      type: String,
      trim: true
    },
    // userSays: [String]
    agentResponses: [String]
  },
  {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
  }
);

const Action = mongoose.model('Action', actionSchema);

module.exports = { Action };
