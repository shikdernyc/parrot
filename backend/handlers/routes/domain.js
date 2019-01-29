const { Domain } = require('../../models');

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

module.exports = {
  retrieveById
};
