const mongoose = require("mongoose");
const { synonymSchema } = require("./synonym");

const ExampleEntitySchema = new mongoose.Schema(
  {
    value: {
      type: String,
      trim: true
    },
    synonyms: [synonymSchema]
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);

module.exports = { ExampleEntitySchema };
