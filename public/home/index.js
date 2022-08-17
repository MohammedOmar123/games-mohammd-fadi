const searchBar = document.querySelector('.search-input');
const dataList = document.querySelector('#games');
const shooterSection = document.querySelector('.shooter');
const strategySection = document.querySelector('.strategy');
const racingSection = document.querySelector('.racing');

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

searchBar.addEventListener('input', () => {
  fetch('/handel-search', {
    method: 'POST',
    body: JSON.stringify({
      searchValue: searchBar.value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
  })
    .then((data) => data.json())
    .then((data) => {
      dataList.textContent = '';
      printResults(data);
    });
});


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
