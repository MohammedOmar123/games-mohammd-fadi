const container = document.querySelector('.container');

const createViews = (game) => {
  const div = document.createElement('div');
  const p = document.createElement('a');
  const img = document.createElement('img');
  p.textContent = game.title;
  img.src = game.thumbnail;
  div.classList.add('card');

  img.onclick = () => {
    location.href = `/game?q=${game.id}`;
  };
  p.onclick = () => {
    location.href = `/game?q=${game.id}`;
  };
  div.append(img);
  div.append(p);
  container.append(div);
};

fetch('/games/platform/browser').then((data) => data.json()).then((games) => {
  const data = games.slice(0, 20);
  data.map((game) => {
    createViews(game);
  });
});
