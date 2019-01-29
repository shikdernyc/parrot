const { Intent } = require('../../models');
const { addIntentToDomain, retreiveIntents } = require('../database/domain');

async function retreiveAllDomainIntents (req, res, next) {
  try {
    const intents = await retreiveIntents(req.params.domainID);
    return res.status(200).json(intents);
  } catch (error) {
    next(error);
  }
}

async function create (req, res, next) {
  try {
    const intent = await Intent.create(req.body);
    await addIntentToDomain(intent._id, req.params.domainID);
    return res.status(200).json(intent);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  create,
  retreiveAllDomainIntents
};
