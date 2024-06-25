//Function to create an HTML element with optional id and class attributes
export const createElement = (tag, id, className) => {
  
    const element = document.createElement(tag);
    if (id) {
      element.setAttribute('id', id);
    }
    if (className) {
      element.setAttribute('class', className);
    }
    return element;
  };
 