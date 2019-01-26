const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const domainSchema = new Schema(
  {
    agentID: {
      type: String,
      trim: true
    },
    domainName: {
      type: String,
      trim: true
    },
    // intentThreshold: Number,
    intents: [{ type: Schema.Types.ObjectId, ref: 'Intent' }],
    actions: [{ type: Schema.Types.ObjectId, ref: 'Action' }],
    stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
  },
  {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
  }
);

const Domain = mongoose.model('Domain', domainSchema);

module.exports = { Domain };
