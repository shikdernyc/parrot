const mongoose = require("mongoose");
const { IntentEntitySchema } = require("./IntentEntity");

const ExampleIntentSchema = new mongoose.Schema({
  userSays: {
    type: String,
    trim: true
  },
  entities: [IntentEntitySchema]
});

module.exports = { ExampleIntentSchema };
