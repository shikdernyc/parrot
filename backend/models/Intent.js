const mongoose = require("mongoose");
const { ExampleIntentSchema } = require("./ExampleIntent");

const IntentSchema = new mongoose.Schema(
  {
    agent_id: {
      type: String,
      trim: true
    },
    domain_id: {
      type: String,
      trim: true
    },
    intentName: {
      type: String,
      trim: true
    },
    examples: [ExampleIntentSchema],
    useWebhook: Boolean,
    usePostFormat: Boolean
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);

const Intent = mongoose.model("Intent", IntentSchema);

module.exports = { Intent };
