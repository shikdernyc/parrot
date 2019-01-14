const bodyParser = require('body-parser');
const express = require('express');
const errorHandler = require('./handlers/error');
const routes = require('./routes');
const { db } = require('./models');

const PORT = process.env.PORT || 8000;
const app = express();

if (process.env.MODE !== 'testing') {
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log('db connected');
  });
}

// body parser
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.use(routes);

app.use(errorHandler);

// server initialization
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = server;
