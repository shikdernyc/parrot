const mongoose = require('mongoose');

const DomainSchema = new mongoose.Schema(
  {
    agentID: {
      type: String,
      trim: true
    },
    domainName: {
      type: String,
      trim: true
    },
    intentThreshold: Number
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
);

const Domain = mongoose.model('Domain', DomainSchema);

module.exports = { Domain };
