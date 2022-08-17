const getGamesFromCategory = require('./getGamesFromCategory');
const getSearchValue = require('./search');
const { getGame, gamePage } = require('./game');
const getLatestReleaseGames = require('./getLatestReleaseGames');
const getGamesPlaltform = require('./getGamesPlaltform');

module.exports = {
  getSearchValue,
  getGame,
  gamePage,
  getGamesFromCategory,
  getLatestReleaseGames,
  getGamesPlaltform,
};
