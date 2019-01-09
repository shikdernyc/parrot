const router = require('express').Router();

const AgentRouter = require('./agent');
const RootRouter = require('./root');

router.use('/', RootRouter);
router.use('/agents', AgentRouter);

module.exports = router;
