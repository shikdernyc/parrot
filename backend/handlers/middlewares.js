const { Agent, Domain, Intent, Entity } = require('../models');

const setExtras = function (req, res, next) {
  if (!req.hasOwnProperty('extras')) {
    req.extras = {};
  }
  next();
};

const setAgentModel = function (req, res, next) {
  req.extras.model = Agent;
  next();
};

const setDomainModel = function (req, res, next) {
  req.extras.model = Domain;
  next();
};

const setIntentModel = function (req, res, next) {
  req.extras.model = Intent;
  next();
};

const setEntityModel = function (req, res, next) {
  req.extras.model = Entity;
  next();
};

module.exports = {
  setExtras,
  setAgentModel,
  setDomainModel,
  setIntentModel,
  setEntityModel
};
