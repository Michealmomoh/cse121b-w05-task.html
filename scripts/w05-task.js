/* W05: Programming Tasks */

/* Declare and initialize global variables */
// Declare the const variable for the HTML div element
const templesElement = document.getElementById('gridly'); 

// Declare the global empty array variable
let templeList = [];

/* async displayTemples Function */
let displayTemples = (templeArray) => {
    templeArray.forEach((temple) => {
      // Create an HTML <article> element
      let templeArticle = document.createElement('article');
  
      // Create an HTML <h3> element and set its text content to the temple's templeName
      let templeNameElement = document.createElement('h3');
      templeNameElement.textContent = temple.templeName;
  
      // Create an HTML <img> element, set its src to the temple's imageUrl, and alt to the temple's location
      let templeImageElement = document.createElement('img');
      templeImageElement.src = temple.imageUrl;
      templeImageElement.alt = temple.location;
  
      // Append the <h3> and <img> elements to the <article> element
      templeArticle.appendChild(templeNameElement);
      templeArticle.appendChild(templeImageElement);
  
      // Append the <article> element to the global templesElement variable
      templesElement.appendChild(templeArticle);
    });
  };



/* async getTemples Function using fetch()*/
let getTemples = async () => {
    try {
      // Fetch JSON temple data
      let response = await fetch('https://byui-cse.github.io/cse121b-course/week05/temples.json');
  
      // Check if the response status is OK (HTTP 200)
      if (!response.ok) {
        throw new Error('Failed to fetch temple data');
      }
  
      // Convert the response to a JavaScript object
      let templeData = await response.json();
  
      // Assign the result to the templeList global array variable
      templeList = templeData;
  
      // Call the displayTemples function with the temple list
      displayTemples(templeList);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  
  // Call the getTemples function to fetch and display the temple data
  getTemples();
  
/* reset Function */
const reset = () => {
    document.querySelector("temples").innerHTML="";
    // Get a reference to the templesElement
    let templesElement = document.getElementById('temples');
  
    // Clear all <article> elements inside templesElement
    while (templesElement.firstChild) {
      templesElement.removeChild(templesElement.firstChild);
    }
  };
  
  // Call the reset function when you want to clear the <article> elements
  reset();


/* sortBy Function */
let sortBy = (temples) => {
    // Call the reset function to clear the output
    reset();
  
    // Get the value of the HTML select element with ID "sortBy"
    const filter = document.querySelector('sortBy').value;
  
    // Use a switch statement to filter and sort the temples based on the selected value
    switch (filter) {
      case 'utah':
        // Filter for temples located in the state of Utah
        let utahTemples = temples.filter((temple) => temple.location.includes('Utah'));
        displayTemples(utahTemples);
        break;
  
      case 'nonutah':
        // Filter for temples located outside the state of Utah
        let nonUtahTemples = temples.filter((temple) => !temple.location.includes('Utah'));
        displayTemples(nonUtahTemples);
        break;
  
      case 'older':
        // Filter for temples built before 1950
        let olderTemples = temples.filter((temple) => new Date(temple.dedicatedDate) < new Date(1950, 0, 1));
        displayTemples(olderTemples);
        break;
  
      case 'all':
        // No filter, display all temples
        displayTemples(temples);
        break;
  
      default:
        // Handle any other cases as needed
        console.error('Invalid filter selected');
        break;
    }
  };
  
  // Call the sortBy function when the select element changes (e.g., in an event listener)
  document.getElementById('sortBy').addEventListener('temples', () => {
    sortBy(templeList); // Pass the templeList array as an argument
  });

getTemples();

/* Event Listener */
// Add a change event listener to the HTML select element with ID "sortBy"
document.querySelector('sortBy').addEventListener('temples', () => {
    sortBy(templeList); // Call the sortBy function with templeList as the argument
  });
