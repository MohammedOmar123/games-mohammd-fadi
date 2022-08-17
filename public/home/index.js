const searchBar = document.querySelector('.search-input');
const dataList = document.querySelector('#games');
const shooterSection = document.querySelector('.shooter');
const strategySection = document.querySelector('.strategy');
const racingSection = document.querySelector('.racing');
const releaseSection = document.querySelector('.release-games');
const searchBtn = document.querySelector('#send');

const createOption = (data) => {
  const option = document.createElement('option');
  option.textContent = data.title;
  dataList.appendChild(option);
};
const printResults = (suggestionsList) => {
  suggestionsList.forEach((games, index) => {
    if (index < 6) {
      createOption(games);
    }
  });
};

const handelAutoComplete = () => {
  const header = {
    method: 'POST',
    body: JSON.stringify({
      searchValue: searchBar.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };
  fetch('/handel-search', header)
    .then((data) => data.json())
    .then((data) => {
      dataList.textContent = '';
      printResults(data);
    }).catch(console.log);
};

searchBar.addEventListener('input', handelAutoComplete);


const createGamesViews = (game,section) => {
  const div = document.createElement('div');
  const p = document.createElement('p');
  const img = document.createElement('img');
  // add content
  p.textContent = game.title;
  img.src = game.thumbnail;

  // add classes
  div.classList.add('card');

  // appending
  div.append(img, p);
  section.append(div);
};
const requestGamesCategory = (categoryName, section) => {
  fetch(`/category/${categoryName}`).then((data) => data.json()).then((games) => {
    const data = games.slice(0, 7);
    data.map((game) => {
      createGamesViews(game, section);
    });
  });
};

requestGamesCategory('strategy', strategySection);
requestGamesCategory('shooter', shooterSection);
requestGamesCategory('racing', racingSection);

const requestGamesByReleaseDate = (section) => {
  fetch('games/latestRelease').then((data) => data.json()).then((games) => {
    const data = games.slice(0, 7);
    data.map((game) => {
      createGamesViews(game, section);
    });
  }).catch(console.log)
};

requestGamesByReleaseDate(releaseSection);