const mongoose = require('mongoose');
mongoose.set('debug', process.env.DEBUG || true);
mongoose.Promise = Promise;
// TODO: Set connection to env variable
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/parrot', {
  keepAlive: true,
  useNewUrlParser: true
});

module.exports = {
  db: mongoose.connection,
  Agent: require('./Agent'),
  Intent: require('./Intent'),
  Domain: require('./Domain'),
  Entity: require('./Entity')
};
