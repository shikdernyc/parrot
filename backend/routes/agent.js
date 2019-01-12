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
        error.message = 'Unable to create agent';
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
  .get((req, res) => {
    findById(Agent, req.params.agent_id)
      .then(agent => {
        res.status(200).json(agent);
      })
      .catch(error => {
        error.message = 'Unable to find agent';
        next(error);
      });
  })
  .put((req, res) => {
    updateById(agent, req.params.agent_id, req.body)
      .then(agent => {
        res.status(200).json(agent);
      })
      .catch(error => {
        error.message = 'Unable to update agent';
        next(error);
      });
  })
  .delete((req, res) => {
    // console.log(req.params.post_id);
    deleteById(agent, req.params.agent_id)
      .then(() => {
        res.status(204).json({
          message: 'Delete successful'
        });
      })
      .catch(error => {
        error.message = 'Unable to delete';
        next(error);
      });
  });

module.exports = router;
