const router = require('express').Router({ mergeParams: true });
const {
  create,
  findById,
  findAndSortAllByCreated,
  updateById,
  deleteById,
  find
} = require('../handlers/routes/common');
const {
  retrieveById,
  retreiveAllDomainStories,
  createStory
} = require('../handlers/routes/domain');
const {
  setDomainModel,
  setIntentModel,
  setActionModel
} = require('../handlers/middlewares');

router
  .route('/')
  .post(setDomainModel, create)
  .get(setDomainModel, findAndSortAllByCreated);

router.route('/:domainID').get(retrieveById);

router.route('/:domainID/actions').get(
  setActionModel,
  (req, res, next) => {
    req.extras.findParams = { domainID: req.params.domainID };
    next();
  },
  find
);

router.route('/:domainID/intents').get(
  setIntentModel,
  (req, res, next) => {
    req.extras.findParams = { domainID: req.params.domainID };
    next();
  },
  find
);

router
  .route('/:domainID/stories')
  .get(retreiveAllDomainStories)
  .post(createStory);

module.exports = router;
