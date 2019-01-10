const router = require('express').Router({ mergeParams: true });
const { Domain } = require('../models');

router.route('/')
  .post((req, res) => {
    Domain({
      agent_id: req.body.agent_id,
      domainName: req.body.domainName,
      enabled: req.body.enabled,
      intentThreshold: req.body.intentThreshold,
      status: req.body.status,
      lastTraining: req.body.lastTraining,
      model: req.body.model,
      extraTrainingData: req.body.extraTrainingData,
      createTimestamp: Date.now()
    }).save(function (err, data) {
      if (err) throw err;
      // console.log(data);
      res.status(201);
      res.send(data);
    });
  })
  .get((req, res) => {
    Domain.find({ agent_id: req.params.agent_id }).sort('-createTimestamp').exec(function (err, domains) {
      if (err) throw err;
      res.send(domains);
    });
  });

router.route('/:domain_id')
  .get((req, res) => {
    Domain.findById(req.params.domain_id, function (err, domain) {
      if (err) throw err;
      res.send(domain);
    });
  })
  .put((req, res) => {
    Domain.findById(req.params.domain_id, function (err, domain) {
      if (err) throw err;
      // update domain
      domain.save(function (err, data) {
        if (err) throw err;
        res.send(domain);
      });
    });
  })
  .delete((req, res) => {
    // console.log(req.params.post_id);
    Domain.deleteOne({ _id: req.params.domain_id }, function (err) {
      if (err) throw err;
      res.sendStatus(204);
    });
    // res.send(req.body);
  });

module.exports = router;
