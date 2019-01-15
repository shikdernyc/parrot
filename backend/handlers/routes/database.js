const db = require('../database');

/**
 * Creates a database entry
 * req.extras.model:  Set to reference database model
 * req.body: Set keys and values of model schema
 */
const create = async function (req, res, next) {
  try {
    const item = await db.create(req.extras.model, req.body);
    return res.status(201).json(item);
  } catch (error) {
    error.message = 'Unable to create';
    next(error);
  }
};

/**
 * Searches the database
 * req.extras.model: Set to database model
 * req.extras.findParams: Keys and value of search
 */
const find = async function (req, res, next) {
  try {
    const item = await db.find(req.extras.model, req.extras.findParams);
    return res.status(201).json(item);
  } catch (error) {
    error.message = 'Unable to find item with given parameter';
    next(error);
  }
};

/**
 * Returns all items from database model
 * req.extras.model: Set to database model
 */
const findAll = async function (req, res, next) {
  try {
    const items = await db.findAll(req.extras.model);
    return res.status(200).json(items);
  } catch (error) {
    error.message = 'Unable to find all';
    next(error);
  }
};

/**
 * Returns all items form database model sorted by created_date
 * req.extras.model: Set to database model
 */
const findAndSortAllByCreated = async function (req, res, next) {
  try {
    const items = await db.findAndSortAll(req.extras.model, 'created_at');
    return res.status(200).json(items);
  } catch (error) {
    error.message = 'Unable to find all';
    next(error);
  }
};

/**
 * Returns an item by id
 * req.extras.model: Set to database model
 * req.params.id: Id of entry
 */
const findById = async function (req, res, next) {
  try {
    const item = await db.findById(req.extras.model, req.params.id);
    return res.status(201).json(item);
  } catch (error) {
    error.message = 'Unable to find item with the given id';
    next(error);
  }
};

/**
 * Deletes an item from the database
 * req.extras.model: Set to database model
 * req.params.id: ID to be deleted
 */
const deleteById = async function (req, res, next) {
  try {
    await db.deleteById(req.extras.model, req.params.id);
    return res.status(204).json({ message: 'Delete successful' });
  } catch (error) {
    next(error);
  }
};

/**
 * Updates a database entry by id
 * req.extras.model: Set to database model
 * req.params.id: entry id
 * req.body: Updated {key: value}
 */
const updateById = async function (req, res, next) {
  try {
    const item = await db.updateById(req.extras.model, req.params.id, req.body);
    return res.status(200).json(item);
  } catch (error) {
    error.message = 'Unable to update item';
    next(error);
  }
};

module.exports = {
  create,
  findAll,
  findAndSortAllByCreated,
  findById,
  deleteById,
  updateById,
  find
};
