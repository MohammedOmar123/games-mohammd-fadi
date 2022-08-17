const router = require('express').Router();

const { getGamesFromCategory, getSearchValue, getLatestReleaseGames } = require('./controllers');

router.post('/handel-search', getSearchValue);
router.get('/category/:categoryName', getGamesFromCategory);
router.get('/games/latestRelease', getLatestReleaseGames);

module.exports = router;
