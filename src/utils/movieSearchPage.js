import { createMovieCard } from '../views/createMovieCard.js';
import { fetchData } from './fetchData.js';
import { API_URL } from '../constants.js';

// Function to fetch movies based on title and year
export const getMovies = async (title = '', year = '') => {
  try {
    const url = `${API_URL}&s=${title}&y=${year}`;
    const { Search } = await fetchData(url);

    const resultList = document.getElementById('results');
    resultList.innerHTML = '';

    if (!Search || Search.length === 0) {
      console.log('Movie not found');
      resultList.innerHTML = 'Movie not found';
      resultList.style.color = 'white';

    } else {
      Search.forEach((result) => {
      const card = createMovieCard(result);
      resultList.appendChild(card);
     });
    }; 
    } catch (error) {
    console.log(error);
  }
};

// Function to handle the search for movies
export const searchForMovies = () => {
  const searchElement = document.getElementById('search-input');
  const searchValue = searchElement.value;
  const searchYearElement = document.getElementById('selectYear');
  const searchYearValue = searchYearElement.value;
  getMovies(searchValue, searchYearValue);
};

