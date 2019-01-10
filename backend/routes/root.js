const router = require('express').Router();

router.route('/', (req, res, next) => {
  res.status(200).json({
    message: 'Hello, World'
  });
});

module.exports = router;
