const shooterSection = document.querySelector('.shooter');
const strategySection = document.querySelector('.strategy');
const racingSection = document.querySelector('.racing');

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
