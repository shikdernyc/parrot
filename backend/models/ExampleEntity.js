const mongoose = require('mongoose');
const { SynonymSchema } = require('./Synonym');

const ExampleEntitySchema = new mongoose.Schema(
  {
    value: {
      type: String,
      trim: true
    },
    synonyms: [SynonymSchema]
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
);

module.exports = { ExampleEntitySchema };
