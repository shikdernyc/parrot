const { Action } = require('../../models');
const { addActionToDomain, retreiveActions } = require('../database/domain');

async function retreiveAllDomainActions (req, res, next) {
  try {
    console.log(req.params.domainID);
    const action = await retreiveActions(req.params.domainID);
    return res.status(200).json(action);
  } catch (error) {
    next(error);
  }
}

async function create (req, res, next) {
  try {
    const action = await Action.create(req.body);
    await addActionToDomain(action._id, req.params.domainID);
    return res.status(200).json(action);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  create,
  retreiveAllDomainActions
};
