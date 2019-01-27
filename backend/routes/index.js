const router = require('express').Router();

router.use('/', require('./root'));
router.use('/agents', require('./agent'));
router.use('/domains', require('./domain'));
router.use('/intents', require('./intent'));
router.use('/entities', require('./entity'));
router.use('/actions', require('./actions'));

module.exports = router;
