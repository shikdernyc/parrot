const mongoose = require("mongoose");

const DomainSchema = new mongoose.Schema(
  {
    agent_id: {
      type: String,
      trim: true
    },
    domainName: {
      type: String,
      trim: true
    },
    enabled: Boolean,
    intentThreshold: Number,
    createTimestamp: Date
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);

const Domain = mongoose.model("Domain", DomainSchema);

module.exports = { Domain };
