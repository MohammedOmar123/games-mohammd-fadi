const router = require('express').Router();

const {
  getGamesFromCategory,
  getSearchValue,
  getGame,
  gamePage,
  getLatestReleaseGames,
  getGamesPlaltform,
  handelSearch,
} = require('./controllers');

router.post('/handel-search', getSearchValue);
router.get('/handel-search', handelSearch);
router.get('/game/:id', gamePage);
router.get('/game', getGame);
router.get('/category/:categoryName', getGamesFromCategory);
router.get('/games/latestRelease', getLatestReleaseGames);
router.get('/games/platform/:platform', getGamesPlaltform);
module.exports = router;
