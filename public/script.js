const container = document.querySelector('.container');
const gameInfoContainer = document.querySelector('.game-info');

const getID = () => {
  const url = location.href;
  const id = url.split('=')[1];
  return id;
};

const fetchGame = (id) => {
  fetch(`/game/${id}`)
    .then((data) => data.json())
    .then((data) => handelRenderingGames(data))
    .catch(console.log);
};

const rederImagse = (game) => {
  for (let i = 1; i < 4; i += 1) {
    let img = document.createElement('img');
    img.src = game.screenshots[i].image;
    gameInfoContainer.appendChild(img);
  }
};

const handelRenderingGames = (game) => {
  createGameCard(game);
  createGameInfoCard(game);
};

const createGameCard = (game) => {
  const bigPicsSection = document.createElement('section');
  container.appendChild(bigPicsSection);
  bigPicsSection.classList.add('big-pics');

  const img = document.createElement('img');
  img.src = game.screenshots[0].image;
  bigPicsSection.appendChild(img);

  const rightSection = document.createElement('section');
  container.appendChild(rightSection);
  rightSection.classList.add('right-section');

  const gameName = document.createElement('h1');
  gameName.textContent = `${game.title}`;
  rightSection.appendChild(gameName);

  const genre = document.createElement('p');
  genre.textContent = `Genre: ${game.genre}`;
  rightSection.appendChild(genre);

  const developer = document.createElement('p');
  developer.textContent = `Developer: ${game.developer}`;
  rightSection.appendChild(developer);

  const published = document.createElement('p');
  published.textContent = `Published: ${game.release_date}`;
  rightSection.appendChild(published);

  const profileBtn = document.createElement('a');
  profileBtn.textContent = 'Profile';
  profileBtn.classList.add('profile-btn');
  profileBtn.setAttribute('href', game.freetogame_profile_url);

  const gameBtn = document.createElement('a');
  gameBtn.textContent = 'Game URL';
  gameBtn.classList.add('game-btn');
  gameBtn.setAttribute('href', game.game_url);

  rightSection.appendChild(profileBtn);
  rightSection.appendChild(gameBtn);
};

const createGameInfoCard = (game) => {
  const description = document.createElement('h1');
  description.textContent = "Description:";
  gameInfoContainer.appendChild(description);

  const gameDescription = document.createElement('p');
  gameDescription.textContent = game.short_description;
  gameInfoContainer.appendChild(gameDescription);

  if (game.minimum_system_requirements.os) {
    const systemRequirments = document.createElement('h1');
    systemRequirments.textContent = "System Requirments:";
    gameInfoContainer.appendChild(systemRequirments);
    const systemRequirmentsList = document.createElement('ul');
    gameInfoContainer.appendChild(systemRequirmentsList);

    const os = document.createElement('li');
    os.textContent = `OS: ${game.minimum_system_requirements.os}`;
    systemRequirmentsList.appendChild(os);

    const processor = document.createElement('li');
    processor.textContent = `Processor: ${game.minimum_system_requirements.processor}`;
    systemRequirmentsList.appendChild(processor);

    const memory = document.createElement('li');
    memory.textContent = `Memory: ${game.minimum_system_requirements.memory}`;
    systemRequirmentsList.appendChild(memory);

    const storage = document.createElement('li');
    storage.textContent = `Storage: ${game.minimum_system_requirements.storage}`;
    systemRequirmentsList.appendChild(storage);

    const screenshots = document.createElement('h1');
    screenshots.textContent = 'Screenshots:';
    gameInfoContainer.appendChild(screenshots);
  }
  if (game.screenshots.length > 0) {
    rederImagse(game);
  }
};

fetchGame(getID());
