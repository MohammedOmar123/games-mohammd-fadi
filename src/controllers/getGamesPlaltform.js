const fetch = require('node-fetch');

const getGamesPlaltform = (req, res) => {
  const { platform } = req.params;
  fetch(`https://www.freetogame.com/api/games?platform=${platform}`)
    .then((games) => games.json()).then((games) => {
      res.send(games);
    });
};

module.exports = getGamesPlaltform;
