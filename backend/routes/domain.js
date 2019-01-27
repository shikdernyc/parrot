const router = require('express').Router({ mergeParams: true });
const {
  create,
  findById,
  findAndSortAllByCreated,
  updateById,
  deleteById,
  find
} = require('../handlers/routes/database');

const { setDomainModel, setIntentModel } = require('../handlers/middlewares');

router
  .route('/')
  // create a domain
  .post(setDomainModel, create)
  // return all domains
  .get(setDomainModel, findAndSortAllByCreated);

// return all intents of a domain
router.route('/:id/intents').get(
  setIntentModel,
  (req, res, next) => {
    req.extras.findParams = { domain_id: req.params.id };
    next();
  },
  find
);

router
  .route('/:id')
  .get(setDomainModel, findById)
  .put(setDomainModel, updateById)
  .delete(setDomainModel, deleteById);

module.exports = router;
