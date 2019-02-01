const { Story, Intent, Action } = require('../../models');
const {
  retreiveStories,
  addStoryToDomain,
  addActionToDomain,
  addIntentToDomain
} = require('../database/domain');
const {
  addIntentToStory,
  addActionToStory,
  populateEvents,
  retrieveIntentsFromStory,
  retrieveActionsFromStory
} = require('../database/story');

// async function retreiveAllDomainStories (req, res, next) {
//   try {
//     const stories = await retreiveStories(req.params.domainID);
//     return res.status(200).json(stories);
//   } catch (error) {
//     next(error);
//   }
// }

// async function create (req, res, next) {
//   try {
//     let story = await Story.create(req.body);
//     const { domainID } = req.params;
//     const domain = await addStoryToDomain(story._id, domainID);
//     console.log(domain);
//     if (!domain) {
//       throw new Error('Invalid Domain ID');
//     } else {
//     }
//     return res.status(200).json(story);
//   } catch (error) {
//     next(error);
//   }
// }

async function retrieveStoryAndEvents (req, res, next) {
  try {
    const story = await populateEvents(req.params.storyID);
    return res.status(200).json(story);
  } catch (error) {
    next(error);
  }
}

async function retrieveIntents (req, res, next) {
  try {
    const intents = await retrieveIntentsFromStory(req.params.storyID);
    return res.status(200).json(intents);
  } catch (error) {
    next(error);
  }
}

async function addIntent (req, res, next) {
  try {
    const intent = await Intent.create(req.body);
    const story = await addIntentToStory(intent._id, req.params.storyID);
    await addIntentToDomain(intent._id, intent.domainID);
    return res.status(200).json(story);
  } catch (error) {
    next(error);
  }
}

async function retrieveActions (req, res, next) {
  try {
    const actions = await retrieveActionsFromStory(req.params.storyID);
    return res.status(200).json(actions);
  } catch (error) {
    next(error);
  }
}

async function addAction (req, res, next) {
  try {
    const action = await Action.create(req.body);
    const story = await addActionToStory(action._id, req.params.storyID);
    await addActionToDomain(action._id, action.domainID);
    return res.status(200).json(story);
  } catch (error) {
    next(error);
  }
}

async function modifyStory (req, res, next) {
  try {
    let newStory = await Story.findByIdAndUpdate(req.params.storyID, req.body);
    newStory = await Story.findById(newStory._id);
    return res.status(200).json(newStory);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  retrieveIntents,
  addIntent,
  retrieveActions,
  addAction,
  retrieveStoryAndEvents,
  modifyStory
};
