const router = require('express').Router({ mergeParams: true });
const { Intent } = require('../models');

router.route('/')
  .post((req, res) => {
    Intent({
      agent_id: req.body.agent_id,
      domain_id: req.body.domain_id,
      intentName: req.body.intentName,
      examples: req.body.examples,
      useWebhook: req.body.useWebhook,
      usePostFormat: req.body.usePostFormat,
      createTimestamp: Date.now()
    }).save(function (err, data) {
      if (err) throw err;
      // console.log(data);
      res.status(201);
      res.send(data);
    });
  })
  .get((req, res) => {
    Intent.find({ agent_id: req.params.agent_id, domain_id: req.params.domain_id }).sort('-createTimestamp').exec(function (err, intents) {
      if (err) throw err;
      res.send(intents);
    });
  });

router.route('/:intent_id')
  .get((req, res) => {
    Intent.findById(req.params.intent_id, function (err, intent) {
      if (err) throw err;
      res.send(intent);
    });
  })
  .put((req, res) => {
    Intent.findById(req.params.intent_id, function (err, intent) {
      if (err) throw err;
      // update domain
      intent.save(function (err, data) {
        if (err) throw err;
        res.send(intent);
      });
    });
  })
  .delete((req, res) => {
    // console.log(req.params.post_id);
    Intent.deleteOne({ _id: req.params.intent_id }, function (err) {
      if (err) throw err;
      res.sendStatus(204);
    });
    // res.send(req.body);
  });

module.exports = router;
