//----------------------------------------------->

//===============================================
//Arrays
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
//----------------------------------------------->
let concepts = ['creating arrays', 'array structures', 'array manipulation']
//----------------------------------------------->
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
console.log(newYearsResolutions);

//===============================================
//Create an Array
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
//----------------------------------------------->
const hobbies = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
console.log(hobbies);
//===============================================
//Accessing Elements 
const hello = 'Hello World';
console.log(hello[6]);
// Output: W
//----------------------------------------------->
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
var listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]);
//===============================================
//Update Elements
let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
 
seasons[3] = 'Autumn';
console.log(seasons); 
//Output: ['Winter', 'Spring', 'Summer', 'Autumn']

//----------------------------------------------->
let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] = 'avocados';
//===============================================
//Arrays with let and const
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
condiments[0] = 'Mayo';
console.log(condiments);
condiments = ['Mayo'];
utensils[3] = 'Spoon';
console.log(utensils);
//===============================================
//The .length property
const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];
 
console.log(newYearsResolutions.length);
// Output: 2
//----------------------------------------------->
const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);
//===============================================
//The .push() Method

const itemTracker = ['item 0', 'item 1', 'item 2'];
 
itemTracker.push('item 3', 'item 4');
 
console.log(itemTracker); 
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];
//----------------------------------------------->
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('poop');
chores.push('fail');
console.log(chores);
//===============================================
//The .pop() Method
const newItemTracker = ['item 0', 'item 1', 'item 2'];
 
const removed = newItemTracker.pop();
 
console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2
//----------------------------------------------->
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores.pop();
console.log(chores);
//===============================================
//More Array Methods
//some array methods that are available to JavaScript developers include: .join(), .slice(), .splice(), .shift(), .unshift(), and .concat() amongst many others.
//----------------------------------------------->
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList);
groceryList.unshift('popcorn');
console.log(groceryList);
console.log(groceryList.slice(1,4));
console.log(groceryList);
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);
//===============================================
//Arrays and Functions
function addFlower(arr) {
  arr.push('lily');
}
 
addFlower(flowers);
 
console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']

const concept = ['arrays', 'can', 'be', 'mutated'];
//----------------------------------------------->
function changeArr(arr){
  arr[3] = 'MUTATED';

}

changeArr(concept);
console.log(concept);
  function removeElement(newArr){
    newArr.pop();
  }

  removeElement(concept);
  console.log(concept);
//===============================================
//Nested Arrays
const nestedArr = [[1], [2, 3]];
const nestedArr = [[1], [2, 3]];
 
console.log(nestedArr[1]); // Output: [2, 3]
const nestedArr = [[1], [2, 3]];
 
console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2

var numberClusters = [[1,2],[3,4],[5,6]];
const target = numberClusters[2][1];
//----------------------------------------------->
