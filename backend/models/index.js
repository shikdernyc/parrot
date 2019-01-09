const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = Promise;
// TODO: Set connection to env variable
mongoose.connect('mongodb://localhost/parrot', {
  keepAlive: true
});

// module.exports.Agent = require("./agent");
