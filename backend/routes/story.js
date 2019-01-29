const router = require('express').Router({ mergeParams: true });
const { findAndSortAllByCreated } = require('../handlers/routes/common');
const {
  create,
  retreiveAllDomainStories,
  retrieveStoryAndEvents,
  retrieveIntents,
  addIntent,
  retrieveActions,
  addAction,
  modifyStory
} = require('../handlers/routes/story');

const { setStoryModel } = require('../handlers/middlewares');

router
  .route('/')
  .post(create)
  .get(retreiveAllDomainStories);

router
  .route('/:storyID')
  .get(retrieveStoryAndEvents)
  .put(modifyStory);

router
  .route('/:storyID/intents')
  .post(addIntent)
  .get(retrieveIntents);

router
  .route('/:storyID/actions')
  .post(addAction)
  .get(retrieveActions);

module.exports = router;
