const router = require('express').Router();

router.use('/agents', require('./agent'));
router.use('/domains', require('./domain'));
router.use('/stories', require('./story'));
router.use('/intents', require('./intent'));
router.use('/actions', require('./action'));

router.use('/', require('./root'));

module.exports = router;
