const getGamesFromCategory = require('./getGamesFromCategory');
const getSearchValue = require('./search');
const { getGame, gamePage } = require('./game');

module.exports = {
  getSearchValue,
  getGame,
  gamePage,
  getGamesFromCategory,
};
