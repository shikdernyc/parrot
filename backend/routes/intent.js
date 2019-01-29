const router = require('express').Router({ mergeParams: true });
const {
  findById,
  updateById,
  deleteById
} = require('../handlers/routes/common');
const {
  create,
  retreiveAllDomainIntents
} = require('../handlers/routes/intents');
const { setIntentModel } = require('../handlers/middlewares');

router
  .route('/')
  .post(create)
  .get(retreiveAllDomainIntents);

router
  .route('/:id')
  .get(setIntentModel, findById)
  .put(setIntentModel, updateById);

module.exports = router;
