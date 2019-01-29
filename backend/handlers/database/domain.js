const { Domain } = require('../../models');

async function findDomainById (id) {
  try {
    return await Domain.findById(id);
  } catch (error) {
    throw error;
  }
}

async function addIntentToDomain (intentID, domainID) {
  try {
    let domain = await findDomainById(domainID);
    domain.intents.push(intentID);
    return await domain.save();
  } catch (error) {
    throw error;
  }
}

async function addStoryToDomain (storyID, domainID) {
  try {
    let domain = await findDomainById(domainID);
    domain.stories.push(storyID);
    return await domain.save();
  } catch (error) {
    throw error;
  }
}

async function addActionToDomain (actionID, domainID) {
  try {
    let domain = await findDomainById(domainID);
    domain.actions.push(actionID);
    return await domain.save();
  } catch (error) {
    throw error;
  }
}

async function retreiveStories (domainID) {
  try {
    let stories = await Domain.findById(domainID, 'stories').populate(
      'stories'
    );
    return stories;
  } catch (error) {
    throw error;
  }
}

async function retreiveActions (domainID) {
  try {
    let actions = await Domain.findById(domainID, 'actions').populate(
      'actions'
    );
    return actions;
  } catch (error) {
    throw error;
  }
}

async function retreiveIntents (domainID) {
  try {
    let intents = await Domain.findById(domainID, 'intents').populate(
      'intents'
    );
    return intents;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  addIntentToDomain,
  addStoryToDomain,
  addActionToDomain,
  retreiveStories,
  retreiveIntents,
  retreiveActions
};
