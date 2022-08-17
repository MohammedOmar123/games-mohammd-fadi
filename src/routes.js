const router = require('express').Router();
const {getSearchValue, getGame, gamePage } = require('./controllers');

router.post('/handel-search', getSearchValue);
router.post('/game', getGame);
router.get('/game/:id', gamePage);

module.exports = router;
