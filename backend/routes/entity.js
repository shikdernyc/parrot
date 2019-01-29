const router = require('express').Router({ mergeParams: true });
const {
  create,
  findById,
  findAndSortAllByCreated,
  updateById,
  deleteById
} = require('../handlers/routes/common');

const { setEntityModel } = require('../handlers/middlewares');

router
  .route('/')
  .get(setEntityModel, findAndSortAllByCreated)
  .post(setEntityModel, create);

router
  .route('/:id')
  .get(setEntityModel, findById)
  .put(setEntityModel, updateById)
  .delete(setEntityModel, deleteById);

module.exports = router;
