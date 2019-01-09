const mongoose = require('mongoose');
const IntentEntity = require('./IntentEntity');

const ExampleIntentSchema = new mongoose.Schema({
  id: Number,
  userSays: {
    type: String,
    trim: true
  },
  entities: [IntentEntity.schema]
});

const ExampleIntent = mongoose.model('ExampleIntent', ExampleIntentSchema);

module.exports = ExampleIntent;
