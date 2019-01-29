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
const { setActionModel } = require('../handlers/middlewares');

router
  .route('/')
  .post(create)
  .get(retreiveAllDomainActions);

router
  .route('/:id')
  .get(setActionModel, findById)
  .put(setActionModel, updateById)
  .delete(setActionModel, deleteById);

module.exports = router;
