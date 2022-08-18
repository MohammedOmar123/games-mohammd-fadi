const searchBar = document.querySelector('.search-input-bar');
const dataList = document.querySelector('#games');
const shooterSection = document.querySelector('.shooter-container');
const strategySection = document.querySelector('.stratgic-container');
const racingSection = document.querySelector('.racing-container');
const rightSection = document.querySelector('.right-section');
const searchBtn = document.querySelector('#send');
const thumbnailImage = document.querySelector('.thumbnail');
const errorMessage = document.querySelector('.error-title');

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
  errorMessage.textContent = '';
  if (searchBar.value) {
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
};

const checkSearchTerm = (data) => {
  if (data.data === 'game not found') {
    errorMessage.textContent = 'game not found';
  } else {
    window.location.href = `/game?q=${data.data}`;
  }
};

const createGamesViews = (game, section) => {
  const div = document.createElement('div');
  const aLink = document.createElement('a');
  const p = document.createElement('p');
  const img = document.createElement('img');
  // add content
  p.textContent = game.title;
  img.src = game.thumbnail;
  aLink.href = `/game?q=${game.id}`;
  // add classes
  div.classList.add('cate-card');

  // appending
  aLink.append(img);
  div.append(aLink, p);
  section.append(div);
};

const requestGamesCategory = (categoryName, section) => {
  fetch(`/category/${categoryName}`).then((data) => data.json()).then((games) => {
    const data = games.slice(0, 4);
    data.map((game) => {
      createGamesViews(game, section);
    });
  });
};

const requestGamesByReleaseDate = (section) => {
  fetch('games/latestRelease').then((data) => data.json()).then((games) => {
    const data = games.slice(0, 3);
    data.map((game) => {
      createGamesViews(game, section);
    });
  }).catch(console.log);
};

searchBar.addEventListener('input', handelAutoComplete);

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (searchBar.value) {
    fetch(`/handel-search?q=${searchBar.value}`)
      .then((data) => data.json())
      .then((data) => checkSearchTerm(data))
      .catch(console.log);
  }
});

thumbnailImage.onclick = () => {
  window.location.href = '/game?id=1';
};
requestGamesCategory('strategy', strategySection);
requestGamesCategory('shooter', shooterSection);
requestGamesCategory('racing', racingSection);
requestGamesByReleaseDate(rightSection);
