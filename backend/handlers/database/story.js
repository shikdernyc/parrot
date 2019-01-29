const { Story } = require('../../models');
const { findById } = require('./common');

async function addIntentToStory (intentID, storyID) {
  try {
    let story = await findById(Story, storyID);
    story.intents.push(intentID);
    return await story.save();
  } catch (error) {
    throw error;
  }
}

async function addActionToStory (actionID, storyID) {
  try {
    let story = await findById(Story, storyID);
    story.actions.push(actionID);
    return await story.save();
  } catch (error) {
    throw error;
  }
}

async function populateEvents (storyID) {
  try {
    let stories = await Story.findById(storyID)
      .populate('intents')
      .populate('actions');
    return stories;
  } catch (error) {
    throw error;
  }
}

async function retrieveIntentsFromStory (storyID) {
  try {
    const intents = await Story.findById(storyID, 'intents').populate(
      'intents'
    );
    return intents;
  } catch (error) {
    throw error;
  }
}

async function retrieveActionsFromStory (storyID) {
  try {
    const actions = await Story.findById(storyID, 'actions').populate(
      'actions'
    );
    return actions;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  addIntentToStory,
  addActionToStory,
  populateEvents,
  retrieveIntentsFromStory,
  retrieveActionsFromStory
};
