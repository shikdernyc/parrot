const router = require('express').Router({ mergeParams: true });
const {
  create,
  findById,
  findAndSortAllByCreated,
  updateById,
  deleteById
} = require('../handlers/routes/database');

const { setIntentModel } = require('../handlers/middlewares');

router
  .route('/')
  .post(setIntentModel, create)
  .get(setIntentModel, findAndSortAllByCreated);

router
  .route('/:id')
  .get(setIntentModel, findById)
  .put(setIntentModel, updateById)
  .delete(setIntentModel, deleteById);

module.exports = router;
