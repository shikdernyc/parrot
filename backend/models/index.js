let envPath = __dirname.split('/');
envPath.pop();
envPath = envPath.join('/');
require('dotenv').config({ path: `${envPath}/.env` });

const mongoose = require('mongoose');
mongoose.set('debug', process.env.DEBUG || true);
mongoose.Promise = Promise;

const connect = () => {
  mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/parrot',
    {
      keepAlive: true,
      useNewUrlParser: true,
      autoReconnect: true,
      reconnectInterval: 1000
    }
  );
};

if (process.env.NODE_ENV !== 'test') {
  let reconnect = setInterval(connect, 1000);

  mongoose.connection.on('error', err => {
    console.log(err);
  });

  mongoose.connection.once('open', function () {
    console.log('db connected');
    clearInterval(reconnect);
  });
}

module.exports = {
  db: mongoose.connection,
  Agent: require('./Agent').Agent,
  Intent: require('./Intent').Intent,
  Domain: require('./Domain').Domain,
  Entity: require('./Entity').Entity
};
