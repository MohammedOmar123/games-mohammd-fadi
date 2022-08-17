const router = require('express').Router();

const {getGamesFromCategory, getSearchValue } = require('./controllers');

router.post('/handel-search', getSearchValue);
router.get('/category/:categoryName', getGamesFromCategory);

module.exports = router;
