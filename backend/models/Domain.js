const mongoose = require('mongoose');

const DomainSchema = new mongoose.Schema({
  agent: {
    type: String,
    trim: true
  },
  domainName: {
    type: String,
    trim: true
  },
  enabled: Boolean,
  intentThreshold: Number,
  status: {
    type: String,
    trim: true
  },
  lastTraining: Date,
  model: {
    type: String,
    trim: true
  },
  extraTrainingData: Boolean
});

const Domain = mongoose.model('Domain', DomainSchema);

module.exports = Domain;
