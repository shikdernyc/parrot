const router = require('express').Router();

router.use('/agents', require('./agent'));
router.use('/domains', require('./domain'));
router.use('/domains/:domainID/stories', require('./story'));
router.use('/domains/:domainID/intents', require('./intent'));
router.use('/domains/:domainID/actions', require('./action'));

router.use('/', require('./root'));

module.exports = router;
