const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const { ExampleIntentSchema } = require('./ExampleIntent');

const storySchema = new Schema(
  {
    agentID: {
      type: String,
      trim: true
    },
    // domainID: {
    //   type: String,
    //   trim: true
    // },
    storyName: {
      type: String,
      trim: true
    },
    // userSays: [String]
    events: [
      {
        intent: { type: Schema.Types.ObjectId, ref: 'Intent' },
        actions: [{ type: Schema.Types.ObjectId, ref: 'Action' }]
      }
    ]
  },
  {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
  }
);

const Action = mongoose.model('Action', actionSchema);

module.exports = { Action };
