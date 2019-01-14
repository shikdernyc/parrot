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
  setExtras,
  setAgentModel,
  setEntityModel,
  setIntentModel,
  setDomainModel
} = require('../handlers/middlewares');

router
  .route('/')
  .post(setExtras, setAgentModel, create)
  .get(setExtras, setAgentModel, findAndSortAllByCreated);

router.route('/:id/domains').get(
  setExtras,
  setDomainModel,
  (req, res, next) => {
    req.extras.findParams = { agent_id: req.params.id };
    next();
  },
  find
);

router.route('/:id/entities').get(
  setExtras,
  setEntityModel,
  (req, res, next) => {
    req.extras.findParams = { agent_id: req.params.id };
  },
  find
);

router.route('/:id/intents').get(
  setExtras,
  setIntentModel,
  (req, res, next) => {
    req.extras.findParams = { agent_id: req.params.id };
    next();
  },
  find
);

router
  .route('/:id')
  .get(setExtras, setAgentModel, findById)
  .put(setExtras, setAgentModel, updateById)
  .delete(setExtras, setAgentModel, deleteById);

module.exports = router;
