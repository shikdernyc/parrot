const router = require('express').Router();
const {
  create,
  findById,
  findAndSortAllByCreated,
  updateById,
  deleteById,
  find
} = require('../handlers/routes/common');

const { setAgentModel, setDomainModel } = require('../handlers/middlewares');

router
  .route('/')
  // create an agent
  .post(setAgentModel, create)
  // return all agents
  .get(setAgentModel, findAndSortAllByCreated);

// return all domains of an agents
router.route('/:id/domains').get(
  setDomainModel,
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
