const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;
const opts = { useNewUrlParser: true };

before((done) => {
  mongoServer = new MongoMemoryServer({ debug: false });
  mongoServer.getConnectionString().then((mongoUri) => {
    return mongoose.connect(mongoUri, opts, (err) => {
      if (err) done(err);
    });
  }).then(() => done());
});

after(() => {
  mongoose.disconnect();
  mongoServer.stop();
});
