let envPath = __dirname.split("/");
envPath.pop();
envPath = envPath.join("/");
require("dotenv").config({ path: `${envPath}/.env` });

const mongoose = require("mongoose");
mongoose.set("debug", process.env.DEBUG || true);
mongoose.Promise = Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/parrot",
  {
    keepAlive: true,
    useNewUrlParser: true
  }
);

module.exports = {
  db: mongoose.connection,
  Agent: require("./Agent").Agent,
  Intent: require("./Intent").Intent,
  Domain: require("./Domain").Domain,
  Entity: require("./Entity").Entity
};
