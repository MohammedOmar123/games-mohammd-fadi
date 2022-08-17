const fetch = require('node-fetch');

const getGamesFromCategory = (req, res) => {
  const { categoryName } = req.params;
  fetch(`https://www.freetogame.com/api/games?category=${categoryName}`).then((games) => games.json()).then((games) => {
    res.send(games);
  });
};

module.exports = getGamesFromCategory;
