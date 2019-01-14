const router = require('express').Router({ mergeParams: true });
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
  setDomainModel,
  setIntentModel
} = require('../handlers/middlewares');

router
  .route('/')
  .post(setExtras, setDomainModel, create)
  .get(setExtras, setDomainModel, findAndSortAllByCreated);

router.route('/:id/intents').get(
  setExtras,
  setIntentModel,
  (req, res, next) => {
    req.extras.findParams = { domain_id: req.params.id };
    next();
  },
  find
);

router
  .route('/:id')
  .get(setExtras, setDomainModel, findById)
  .put(setExtras, setDomainModel, updateById)
  .delete(setExtras, setDomainModel, deleteById);

module.exports = router;
