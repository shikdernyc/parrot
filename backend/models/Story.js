const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const { ExampleIntentSchema } = require('./ExampleIntent');

const storyEvent = new Schema({
  // ENUM: "Intent" || "Action"
  ref: { type: String, trim: true },
  id: { type: String, trim: true }
});

const storySchema = new Schema(
  {
    domainID: {
      type: String,
      trim: true
    },
    storyName: {
      type: String,
      trim: true
    },
    intents: [{ type: Schema.Types.ObjectId, ref: 'Intent' }],
    actions: [{ type: Schema.Types.ObjectId, ref: 'Action' }],
    sequence: [storyEvent]
  },
  {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
  }
);

const Story = mongoose.model('Story', storySchema);

module.exports = { Story };
