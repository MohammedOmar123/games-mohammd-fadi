const router = require('express').Router();
const { getGamesFromCategory } = require('./controllers');

router.get('/category/:categoryName', getGamesFromCategory);
module.exports = router;
