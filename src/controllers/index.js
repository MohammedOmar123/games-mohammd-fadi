const getGamesFromCategory = require('./getGamesFromCategory');
const getSearchValue = require('./search');
const { getGame, gamePage } = require('./game');
const getLatestReleaseGames = require('./getLatestReleaseGames');
const getGamesPlaltform = require('./getGamesPlaltform');
const handelSearch = require('./handelSearch');
const { clientErrors, serverErrors } = require('./error');

module.exports = {
  getSearchValue,
  getGame,
  gamePage,
  getGamesFromCategory,
  getLatestReleaseGames,
  getGamesPlaltform,
  handelSearch,
  clientErrors,
  serverErrors,
};
