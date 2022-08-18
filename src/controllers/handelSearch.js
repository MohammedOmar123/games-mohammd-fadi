const fetch = require('node-fetch');

const searchForInObject = (arr, searchTerm) => {
  const filtred = arr.filter((el) => {
    if (el.title.toLowerCase() === searchTerm.toLowerCase())
      return el.id;
  });
  if (filtred.length > 0) return filtred[0].id;
  else return 'game not found';
};

const handelSearch = (req, res) => {
  fetch('https://www.freetogame.com/api/games')
    .then((data) => data.json())
    .then((data) => searchForInObject(data, req.query.q))
    .then((data) => res.json({data}))
    .catch((err) => console.log(err));
};

module.exports = handelSearch;
