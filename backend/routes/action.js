const router = require('express').Router({ mergeParams: true });
const {
  findById,
  updateById,
  deleteById
} = require('../handlers/routes/common');
const {
  create,
  retreiveAllDomainActions
} = require('../handlers/routes/actions');
const { setIntentModel } = require('../handlers/middlewares');

router
  .route('/')
  .post(create)
  .get(retreiveAllDomainActions);

router
  .route('/:id')
  .get(setIntentModel, findById)
  .put(setIntentModel, updateById);

module.exports = router;
