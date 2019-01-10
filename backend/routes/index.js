const router = require('express').Router();

const AgentRouter = require('./agent');
const DomainRouter = require('./domain');
const RootRouter = require('./root');

router.use('/', RootRouter);
router.use('/agents', AgentRouter);
router.use('/agents/:agent_id/domains', DomainRouter);

module.exports = router;
