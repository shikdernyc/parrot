const router = require('express').Router({ mergeParams: true });
const {
  create,
  findById,
  findAndSortAllByCreated,
  updateById,
  deleteById,
  find
} = require('../handlers/routes/common');
const { retrieveById } = require('../handlers/routes/domain');
const { setDomainModel, setIntentModel } = require('../handlers/middlewares');

router
  .route('/')
  .post(setDomainModel, create)
  .get(setDomainModel, findAndSortAllByCreated);

router.route('/:domainID').get(retrieveById);
// .put(setDomainModel, updateById)
// .delete(setDomainModel, deleteById);

module.exports = router;
