const create = async function (model, schema) {
  try {
    return await model.create(schema);
  } catch (error) {
    throw error;
  }
};

const findAll = async function (model) {
  try {
    return await model.find({});
  } catch (error) {
    throw error;
  }
};

const findAndSort = async function (model, sortBy, order = 'desc') {
  try {
    return await model.find({}).sort({ [sortBy]: order });
  } catch (error) {
    throw error;
  }
};

const findById = async function (model, id) {
  try {
    return await model.findById(id);
  } catch (error) {
    throw error;
  }
};

const deleteById = async function (model, id) {
  try {
    return await model.deleteOne({ id });
  } catch (error) {
    throw error;
  }
};

const updateById = async function (model, id, updates) {
  try {
    return await model.findByIdAndUpdate(id, updates);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  create,
  findAll,
  findAndSort,
  findById,
  deleteById,
  updateById
};
