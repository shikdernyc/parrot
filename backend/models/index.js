const path = require('path');
let envPath = __dirname.split('/');
envPath.pop();
envPath = envPath.join('/');
require('dotenv').config({ path: `${envPath}/.env` });

const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = Promise;
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/parrot',
  {
    keepAlive: true,
    useNewUrlParser: true
  }
);

module.exports = {
  db: mongoose.connection,
  Agent: require('./Agent'),
  Intent: require('./Intent'),
  Domain: require('./Domain'),
  Entity: require('./Entity')
};
