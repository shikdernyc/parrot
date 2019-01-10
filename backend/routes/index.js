const router = require('express').Router();

const AgentRouter = require('./agent');
const DomainRouter = require('./domain');
const IntentRouter = require('./intent');
const RootRouter = require('./root');
const EntityRouter = require('./entity');

router.use('/', RootRouter);
router.use('/agents', AgentRouter);
router.use('/agents/:agent_id/domains', DomainRouter);
router.use('/agents/:agent_id/domains/:domain_id', IntentRouter);
router.use('/agents/:agent_id/entities', EntityRouter);

module.exports = router;
