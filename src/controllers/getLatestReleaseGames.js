const fetch = require('node-fetch');

const getLatestReleaseGames = (req, res) => {
  fetch('https://www.freetogame.com/api/games?sort-by=release-date')
  .then((data) => data.json())
  .then((games) => res.send(games));
};

module.exports = getLatestReleaseGames;
