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
  setActionModel
  // setEntityModel,
  // setIntentModel,
  // setDomainModel
} = require('../handlers/middlewares');

router
  .route('/')
  .post(setActionModel, create)
  .get(setActionModel, findAndSortAllByCreated);

// router.route('/:id/domains').get(
//   setDomainModel,
//   (req, res, next) => {
//     req.extras.findParams = { agent_id: req.params.id };
//     next();
//   },
//   find
// );
//
// router.route('/:id/entities').get(
//   setEntityModel,
//   (req, res, next) => {
//     req.extras.findParams = { agent_id: req.params.id };
//   },
//   find
// );
//
// router.route('/:id/intents').get(
//   setIntentModel,
//   (req, res, next) => {
//     req.extras.findParams = { agent_id: req.params.id };
//     next();
//   },
//   find
// );

router
  .route('/:id')
  .get(setActionModel, findById)
  .put(setActionModel, updateById)
  .delete(setActionModel, deleteById);

module.exports = router;
