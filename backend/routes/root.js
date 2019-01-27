const router = require('express').Router();

router.route('/').get((req, res) => {
  res.status(200).json({
    message: 'Parrot api'
  });
});

module.exports = router;
