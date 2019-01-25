const router = require('express').Router();
const {
  create,
  findById,
  findAndSortAllByCreated,
  updateById,
  deleteById,
  find
} = require('../handlers/routes/database');

const {
  setAgentModel,
  setEntityModel,
  setIntentModel,
  setDomainModel
} = require('../handlers/middlewares');

router
  .route('/')
  .post(setAgentModel, create)
  .get(setAgentModel, findAndSortAllByCreated);

router.route('/:id/domains').get(
  setDomainModel,
  (req, res, next) => {
    req.extras.findParams = { agentID: req.params.id };
    next();
  },
  find
);

router.route('/:id/entities').get(
  setEntityModel,
  (req, res, next) => {
    req.extras.findParams = { agentID: req.params.id };
  },
  find
);

router.route('/:id/intents').get(
  setIntentModel,
  (req, res, next) => {
    req.extras.findParams = { agentID: req.params.id };
    next();
  },
  find
);

router
  .route('/:id')
  .get(setAgentModel, findById)
  .put(setAgentModel, updateById)
  .delete(setAgentModel, deleteById);

module.exports = router;
