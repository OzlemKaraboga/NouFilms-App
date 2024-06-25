import { createElement } from '../utils/createElement.js';
import { displayMovieInfo } from '../utils/movieInfoDisplay.js';
import { API_URL } from '../constants.js';

// Function to create a movie card element
export const createMovieCard = (movie) => {
  const { Poster, Title, imdbID } = movie;
  const movieCard = createElement('div', 'movie-card', 'movie-card');
  const movieImg = createElement('img', 'movie-img', 'movie-img');

  movieCard.style.position = 'relative';

  // If the poster image is not available ('N/A'), set a default image source
  if (Poster === 'N/A') {
    movieImg.src = './public/img/default-card-image.png';
  } else {
    movieImg.src = Poster;
  }

  movieImg.setAttribute('alt', Title);
  const seeMore = createElement('p', 'see-more');
  seeMore.textContent = 'See more';

  const movieTitle = createElement('h1');
  movieTitle.textContent = Title;

  movieCard.appendChild(movieImg);
  movieCard.appendChild(seeMore);

  // Click event listener to display more information about the movie
  seeMore.addEventListener('click', async () => {
    const url = `${API_URL}&i=${imdbID}`;
    await displayMovieInfo(url);
  });

  return movieCard;
};
