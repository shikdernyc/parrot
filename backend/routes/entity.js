const router = require('express').Router({ mergeParams: true });
const { Entity } = require('../models');

router.route('/')
  .post((req, res) => {
    Entity({
      agent_id: req.body.agent_id,
      entityName: req.body.entityName,
      uiColor: req.body.uiColor,
      examples: req.body.examples,
      regex: req.body.regex,
      type: req.body.type,
      createTimestamp: Date.now()
    }).save(function (err, data) {
      if (err) throw err;
      // console.log(data);
      res.status(201);
      res.send(data);
    });
  })
  .get((req, res) => {
    Entity.find({ agent_id: req.params.agent_id }).sort('-createTimestamp').exec(function (err, entities) {
      if (err) throw err;
      res.send(entities);
    });
  });

router.route('/:entity_id')
  .get((req, res) => {
    Entity.findById(req.params.entity_id, function (err, entity) {
      if (err) throw err;
      res.send(entity);
    });
  })
  .put((req, res) => {
    Entity.findById(req.params.entity_id, function (err, entity) {
      if (err) throw err;
      // update domain
      entity.save(function (err, data) {
        if (err) throw err;
        res.send(entity);
      });
    });
  })
  .delete((req, res) => {
    // console.log(req.params.post_id);
    Entity.deleteOne({ _id: req.params.entity_id }, function (err) {
      if (err) throw err;
      res.sendStatus(204);
    });
    // res.send(req.body);
  });

module.exports = router;
