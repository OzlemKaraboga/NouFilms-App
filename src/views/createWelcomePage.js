import { getMovies } from '../utils/movieSearchPage.js';

// Function to create the welcome page
export const createWelcomePage = () => {
  
  // List of default movie categories
  const defaultCategories = [
    'action',
    'adventure',
    'animation',
    'comedy',
    'crime',
    'documentary',
    'drama',
    'family',
    'history',
    'horror',
    'music',
    'mystery',    
    'science fiction',
    'tv movie',
    'thriller',
    'war',
    'western',
  ];

  // Getting a random movie category from the default list
  getMovies(defaultCategories[Math.floor(Math.random() * defaultCategories.length)]);
};