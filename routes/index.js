const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

// Author page.
router.get('/credits', (req, res, next) => {
    res.render('credits');
});

module.exports = router;
