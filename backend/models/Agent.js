const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AgentSchema = new Schema(
  {
    agentName: {
      type: String,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    domains: [{ type: Schema.Types.ObjectId, ref: 'Domain' }]
  },
  {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
  }
);

const Agent = mongoose.model('Agent', AgentSchema);

module.exports = { Agent };
