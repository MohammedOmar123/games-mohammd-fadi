const getGamesFromCategory = require('./getGamesFromCategory');
const getSearchValue = require('./search');
const { getGame, gamePage } = require('./game');
const getLatestReleaseGames = require('./getLatestReleaseGames');

module.exports = {
  getSearchValue,
  getGame,
  gamePage,
  getGamesFromCategory,
  getLatestReleaseGames,
};
