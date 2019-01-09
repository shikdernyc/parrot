const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = Promise;
// TODO: Set connection to env variable
mongoose.connect('mongodb://localhost/parrot', {
  keepAlive: true
});

module.exports = {
  db: mongoose.connection,
  Agent: require('./Agent'),
  Intent: require('./Intent'),
  Domain: require('./Domain')
};
