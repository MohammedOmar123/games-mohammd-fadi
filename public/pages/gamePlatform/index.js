const container = document.querySelector('.games-container');

const createViews = (game) => {
  const div = document.createElement('div');
  const p = document.createElement('p');
  const img = document.createElement('img');
  // add content
  p.textContent = game.title;
  img.src = game.thumbnail;
  // add classes
  div.classList.add('card');
  // appending 
  div.append(p);
  div.append(img);
  container.append(div);
}

fetch('/games/platform/pc').then((data) => data.json()).then((games) => {
 const data = games.slice(0, 20);
 data.map((game) => {
    createViews(game);
 })
});