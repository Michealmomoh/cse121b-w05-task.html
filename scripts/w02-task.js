/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Michael Momoh";
let currentYear = new Date().getFullYear();
let profilePicture = "images/placeholder.png";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
let yearElement = document.querySelector("year");
let imageElement =document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML= `<strong>${fullName}</strong>`;
currentYear.textContent = yearElement
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
// an array variable to hold your favorite foods
var favoriteFoods = ["Chicken Pizza", "soup", "Sushi", "water", "Chocolate from africa and bread", "Burgers"];
foodElement.innerHTML =`<stronge>${favoriteFoods}</strong>`;
var newFavoriteFood = "Ice cream vanila favour"
favoriteFoods.push(newFavoriteFood)
foodElement.innerHTML+=`<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML+=`<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML+=`<br>${favoriteFoods}`;




foodElement.innerHTML =text



















