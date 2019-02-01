const router = require('express').Router({ mergeParams: true });
const {
  retrieveStoryAndEvents,
  retrieveIntents,
  addIntent,
  retrieveActions,
  addAction,
  modifyStory
} = require('../handlers/routes/story');

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
