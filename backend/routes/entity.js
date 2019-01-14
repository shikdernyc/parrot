const router = require('express').Router({ mergeParams: true });
const {
  create,
  findById,
  findAndSortAllByCreated,
  updateById,
  deleteById,
  find
} = require('../handlers/routes/database');

const { setExtras, setEntityModel } = require('../handlers/middlewares');

router
  .route('/')
  .get(setExtras, setEntityModel, findAndSortAllByCreated)
  .post(setExtras, setEntityModel, create);

router
  .route('/:id')
  .get(setExtras, setEntityModel, findById)
  .put(setExtras, setEntityModel, updateById)
  .delete(setExtras, setEntityModel, deleteById);

module.exports = router;
