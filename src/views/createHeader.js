import {createElement} from '../utils/createElement.js';

//Function to create a header element
export const createHeader = () => {
  const header = createElement('header');
  const logo = createElement('img', 'logo');
  logo.src = './public/img/logo.png';
  const pElement = createElement('p');
  pElement.textContent = '...Discover Movies on NouFilms...';
  
  header.appendChild(logo);
  header.appendChild(pElement);
  
  return header;
};
