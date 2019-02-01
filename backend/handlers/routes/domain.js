const { Domain, Story } = require('../../models');
const { retreiveStories, addStoryToDomain } = require('../database/domain');

async function retrieveById (req, res, next) {
  try {
    const domain = await Domain.findById(req.params.domainID)
      .populate('intents')
      .populate('actions')
      .populate('stories');
    return res.status(200).json(domain);
  } catch (error) {
    next(error);
  }
}

async function retreiveAllDomainStories (req, res, next) {
  try {
    const stories = await retreiveStories(req.params.domainID);
    return res.status(200).json(stories);
  } catch (error) {
    next(error);
  }
}

async function createStory (req, res, next) {
  try {
    let story = await Story.create(req.body);
    const { domainID } = req.params;
    const domain = await addStoryToDomain(story._id, domainID);
    console.log(domain);
    if (!domain) {
      throw new Error('Invalid Domain ID');
    } else {
    }
    return res.status(200).json(story);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  retrieveById,
  retreiveAllDomainStories,
  createStory
};
