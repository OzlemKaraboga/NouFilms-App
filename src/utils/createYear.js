//Function to fill a select element with years starting from the current year down to 1990
export const createYear = (selectId) => {
  
  const currentYear = new Date().getFullYear();  
  const selectElement = document.getElementById(selectId);  
  let options = `<option value="">Filter By Year</option>`;
  
  let year = currentYear;
  while (year > 1990) {
    options += `<option value="${year}">${year}</option>`;
    year--;
  }
  
  selectElement.innerHTML = options;
};


  