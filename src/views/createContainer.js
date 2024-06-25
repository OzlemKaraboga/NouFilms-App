import {searchForMovies} from '../utils/movieSearchPage.js';
import {createElement} from '../utils/createElement.js';

//Function to create a container element for a movie search page
export const createContainer = () => {
  const container = createElement('div','container', 'container');
  const searchBar = createElement('div', 'search-bar', 'search-bar');
  const searchInput = createElement('input', 'search-input');
  searchInput.setAttribute('placeholder', 'Search with title');
  const selectBoxDate = createElement('select', 'selectYear');
  const searchButton = createElement('button', 'search-button');
  searchButton.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i>`;  
  const results = createElement('div', 'results', 'results');

   // Append elements to the container
  container.appendChild(searchBar);
  container.appendChild(results);
  searchBar.appendChild(searchInput);
  searchBar.appendChild(selectBoxDate);
  searchBar.appendChild(searchButton);
  
  // Add event listeners for search functionality
  searchButton.addEventListener('click', searchForMovies);
  searchInput.addEventListener('keypress', (e) => {
    if (e.charCode === 13) {
      searchForMovies();
    }
  });

  return container;
};
