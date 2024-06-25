import {createElement} from '../utils/createElement.js';

// Function to remove a child element from its parent element
const closeMovieInfoPopup = (parentElement, childElement) => {
  parentElement.removeChild(childElement);
}

export const createMovieInfo = (data, resultList) => {
  const {
    Title,
    Year,
    Runtime,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Poster,
    imdbRating,
  } = data;

  const movieInfoContainer = createElement('div', 'movie-info-container');
  const movieInfoImg = createElement('img', 'movie-info-img');
  const movieInfoContainerContent = createElement('div', 'movie-info-container-content');

  // Create User Interface
const movieInfoTitle = createElement('h1');
const movieInfoYear = createElement('p');
const movieInfoDescription = createElement('p');
const movieInfoRunTime = createElement('p');
const movieInfoLanguage = createElement('p');
const movieInfoRating = createElement('p');
const movieInfoDirector = createElement('p');
const movieInfoWriter = createElement('p');
const movieInfoActors = createElement('p');
const crossIcon = createElement('i', '', 'fa-solid fa-2x fa-xmark');

  // Execute User Interface
  movieInfoContainer.appendChild(movieInfoImg);
  movieInfoContainer.appendChild(movieInfoContainerContent);
  movieInfoContainerContent.appendChild(crossIcon);
  movieInfoContainerContent.appendChild(movieInfoTitle);
  movieInfoContainerContent.appendChild(movieInfoYear);
  movieInfoContainerContent.appendChild(movieInfoLanguage);
  movieInfoContainerContent.appendChild(movieInfoRunTime);
  movieInfoContainerContent.appendChild(movieInfoRating);
  movieInfoContainerContent.appendChild(movieInfoDirector);
  movieInfoContainerContent.appendChild(movieInfoWriter);
  movieInfoContainerContent.appendChild(movieInfoActors);
  movieInfoContainerContent.appendChild(movieInfoDescription);

  // If the poster image is not available ('N/A'), set a default image source
  if (Poster === 'N/A') {
    movieInfoImg.src = '../../public/img/default-card-image.png';
  } else {
    movieInfoImg.src = Poster;
  }

  movieInfoImg.setAttribute('alt', Title);
  movieInfoTitle.textContent = `${Title}`;
  movieInfoYear.textContent = `Year : ${Year}`;
  movieInfoLanguage.textContent = `Language : ${Language}`;
  movieInfoRunTime.textContent = `Duration : ${Runtime}`;
  movieInfoRating.textContent = `Imdb Rating : ${imdbRating}`;
  movieInfoDirector.textContent = `Director : ${Director}`;
  movieInfoWriter.textContent = `Writer : ${Writer}`;
  movieInfoActors.textContent = `Actors : ${Actors}`;
  movieInfoDescription.textContent = `Description : ${Plot}`;

  // Event listener for the cross icon click to close the movie information pop-up
  crossIcon.addEventListener('click', () => {
    closeMovieInfoPopup(resultList, movieInfoContainer);
  });

  return movieInfoContainer;
};

