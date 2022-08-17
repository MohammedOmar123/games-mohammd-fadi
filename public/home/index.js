const searchBar = document.querySelector('.search-input');
const dataList = document.querySelector('#games');

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
