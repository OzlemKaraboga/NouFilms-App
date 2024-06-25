import { fetchData } from './fetchData.js';
import { createMovieInfo } from '../views/createMovieInfo.js';

// Function to display movie information retrieved from the provided URL
export const displayMovieInfo = async (url) => {
  try {
    const data = await fetchData(url);
    const resultList = document.getElementById('results');
    const movieInfo = createMovieInfo(data, resultList);
    resultList.appendChild(movieInfo);
  } catch (error) {
    console.log(error);
  }
};