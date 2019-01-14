const server = require('../index');
const supertest = require('supertest');
const chai = require('chai');
const chaiExclude = require('chai-exclude');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

// init chai
chai.use(chaiExclude);
global.expect = chai.expect;

// init express app
global.app = supertest.agent(server);

// init mongodb
let mongoServer;
const opts = { useNewUrlParser: true };

before((done) => {
  mongoServer = new MongoMemoryServer({ debug: false });
  mongoServer.getConnectionString().then((mongoUri) => {
    return mongoose.connect(mongoUri, opts, (err) => {
      if (err) throw err;
    });
  }).then(() => done());
});

after((done) => {
  mongoose.disconnect();
  mongoServer.stop();
  server.close();
  done();
});
