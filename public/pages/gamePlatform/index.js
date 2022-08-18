const container = document.querySelector('.container');

const createViews = (game) => {
  const div = document.createElement('div');
  const p = document.createElement('a');
  const img = document.createElement('img');
  p.textContent = game.title;
  img.src = game.thumbnail;
  img.onclick = () => {
    location.href = `/game?q=${game.id}`;
  };
  p.onclick = () => {
    location.href = `/game?q=${game.id}`;
  };
  div.classList.add('card');
  div.append(img);
  div.append(p);
  container.append(div);
};

fetch('/games/platform/pc').then((data) => data.json()).then((games) => {
  const data = games.slice(0, 20);
  data.map((game) => {
    createViews(game);
  });
});
