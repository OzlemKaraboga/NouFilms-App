import {createHeader} from '../views/createHeader.js';
import {createContainer} from '../views/createContainer.js';
import {createFooter} from '../views/createFooter.js';
import {createYear} from '../utils/createYear.js';


export const createUserElement = () => {
  const header = createHeader();
  const container = createContainer();
  const footer = createFooter();

  document.body.appendChild(header);
  document.body.appendChild(container);
  document.body.appendChild(footer);

  createYear('selectYear');
  
};
