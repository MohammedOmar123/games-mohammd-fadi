const path = require('path');
const fetch = require('node-fetch');

const seatchForInObject = (arr, searchTerm) => {
  const filtred = arr.filter((el) => {
    if (el.title.toLowerCase() === searchTerm.toLowerCase())
      return el.id;
  });
  return filtred[0].id;
};

const getGame = (req, res) => {
  const gamePath = path.join(__dirname, '..', '..', 'public', 'pages', 'game', 'index.html');
  res.sendFile(gamePath);
};

const gamePage = (req, res) => {
  const gameId = req.params.id;
  fetch(`https://www.freetogame.com/api/game?id=${gameId}`)
    .then((data) => data.json())
    .then((data) => res.send(data)).catch(console.log);
};

module.exports = { getGame, gamePage };
