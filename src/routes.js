const router = require('express').Router();

const { getGamesFromCategory, getSearchValue, getGame, gamePage, getLatestReleaseGames, getGamesPlaltform } = require('./controllers');
router.post('/handel-search', getSearchValue);
router.post('/game', getGame);
router.get('/game/:id', gamePage);
router.get('/category/:categoryName', getGamesFromCategory);
router.get('/games/latestRelease', getLatestReleaseGames);
router.get('/games/platform/:platform', getGamesPlaltform);
module.exports = router;