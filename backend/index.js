const bodyParser = require('body-parser');
const express = require('express');
const errorHandler = require('./handlers/error');
const routes = require('./routes');
const { setExtras } = require('./handlers/middlewares');

const PORT = process.env.PORT || 8000;
const app = express();

// body parser
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.use(setExtras);

app.use(routes);

app.use(errorHandler);

// server initialization
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = server;
