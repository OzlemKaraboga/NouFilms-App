import {createElement} from '../utils/createElement.js';

//Function to create a footer element
export const createFooter = () => {
  const footer = createElement('footer');
 
  const pElement = createElement('p');
  pElement.textContent = 'Designed by Ozlem Karaboga@2024';
  footer.appendChild(pElement);

  return footer;
};
