const router = require('express').Router();
const { Agent } = require('../models');
const {
  create,
  findAndSort,
  findById,
  deleteById,
  updateById
} = require('../handlers/database');

router
  .route('/')
  .post((req, res, next) => {
    create(Agent, req.body)
      .then(agent => {
        res.status(201).json(agent);
      })
      .catch(error => {
        error.status = 400;
        error.message = 'Unable to create the agent';
        next(error);
      });
  })
  .get((req, res, next) => {
    findAndSort(Agent, 'created_at')
      .then(agents => {
        res.status(200).json(agents);
      })
      .catch(error => {
        error.status = 400;
        error.message = 'Unable to find all agents';
        next(error);
      });
  });

router
  .route('/:agent_id')
  .get((req, res, next) => {
    findById(Agent, req.params.agent_id)
      .then(agent => {
        res.status(200).json(agent);
      })
      .catch(error => {
        error.status = 400;
        error.message = 'Unable to find the agent';
        next(error);
      });
  })
  .put((req, res, next) => {
    updateById(Agent, req.params.agent_id, req.body)
      .then(agent => {
        res.status(200).json(agent);
      })
      .catch(error => {
        error.status = 400;
        error.message = 'Unable to update the agent';
        next(error);
      });
  })
  .delete((req, res, next) => {
    deleteById(Agent, req.params.agent_id)
      .then(() => {
        res.status(204).json({
          message: 'Delete successful'
        });
      })
      .catch(error => {
        error.status = 400;
        error.message = 'Unable to delete the agent';
        next(error);
      });
  });

module.exports = router;
