const router = require('express').Router();

const { getGamesFromCategory, getSearchValue, getGame, gamePage } = require('./controllers');

router.post('/handel-search', getSearchValue);
router.post('/game', getGame);
router.get('/game/:id', gamePage);
router.get('/category/:categoryName', getGamesFromCategory);

module.exports = router;
