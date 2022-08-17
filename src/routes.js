const router = require('express').Router();

const { getGamesFromCategory, getSearchValue, getGame, gamePage, getLatestReleaseGames } = require('./controllers');
router.post('/handel-search', getSearchValue);
router.post('/game', getGame);
router.get('/game/:id', gamePage);
router.get('/category/:categoryName', getGamesFromCategory);
router.get('/games/latestRelease', getLatestReleaseGames);

module.exports = router;
