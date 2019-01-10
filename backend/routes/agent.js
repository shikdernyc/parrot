const router = require('express').Router();
const { Agent } = require('../models');

router.route('/')
  .post((req, res, next) => {
    Agent({
      agentName: req.body.agentName,
      description: req.body.description,
      language: req.body.language,
      timezone: req.body.timezone,
      useWebhook: req.body.useWebhook,
      usePostFormat: req.body.usePostFormat,
      domainClassifierThreshold: req.body.domainClassifierThreshold,
      fallbackResponses: req.body.fallbackResponses,
      status: req.body.status,
      lastTraining: req.body.lastTraining,
      extraTrainingData: req.body.extraTrainingData,
      enableModelsPerDomain: req.body.enableModelsPerDomain,
      model: req.body.model,
      createTimestamp: Date.now()
    }).save(function (err, data) {
      if (err) {
        // let err = new Error('not found');
        err.status = 400;
        next(err);
      } else {
        res.status(201);
        res.send(data);
      }
    });
  })
  .get((req, res, next) => {
    Agent.find({}).sort('-createTimestamp').exec(function (err, agents) {
      if (err) {
        err.status = 400;
        next(err);
      } else {
        res.send(agents);
      }
    });
  });

router.route('/:agent_id')
  .get((req, res) => {
    Agent.findById(req.params.agent_id, function (err, agent) {
      if (err) throw err;
      res.send(agent);
    });
  })
  .put((req, res) => {
    Agent.findById(req.params.agent_id, function (err, agent) {
      if (err) throw err;
      // update agent
      // agent.agentName = req.body.agentName;
      agent.save(function (err, data) {
        if (err) throw err;
        res.send(agent);
      });
    });
  })
  .delete((req, res) => {
    // console.log(req.params.post_id);
    Agent.deleteOne({ _id: req.params.agent_id }, function (err) {
      if (err) throw err;
      res.sendStatus(204);
    });
    // res.send(req.body);
  });

module.exports = router;
