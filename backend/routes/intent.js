const router = require('express').Router({ mergeParams: true });
const {
  create,
  findById,
  findAndSortAllByCreated,
  updateById,
  deleteById
} = require('../handlers/routes/database');

const { setExtras, setIntentModel } = require('../handlers/middlewares');

router
  .route('/')
  .post(setExtras, setIntentModel, create)
  .get(setExtras, setIntentModel, findAndSortAllByCreated);

router
  .route('/:id')
  .get(setExtras, setIntentModel, findById)
  .put(setExtras, setIntentModel, updateById)
  .delete(setExtras, setIntentModel, deleteById);

module.exports = router;
