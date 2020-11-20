//===============================================
//FUNCTIONS
console.log(greetWorld()); // Output: Hello, World!
 
function greetWorld() {
  console.log('Hello, World!');
}
//----------------------------------------------->
function getReminder() {
  console.log('Water the plants')
}
function greetInSpanish() {
  console.log('Buenas Tardes')
}
//===============================================
//Calling a function
function sayThanks() {
  console.log('Thank you for your purchase! We appreciate your business.')
  }
  sayThanks();
  sayThanks();
  sayThanks();
//----------------------------------------------->
  function sayThanks(name) {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
  }
  sayThanks('Cole')
//===============================================
  //Default Parameters
  function greeting (name = 'stranger') {
    console.log(`Hello, ${name}!`)
  }
   
  greeting('Nick') // Output: Hello, Nick!
  greeting() // Output: Hello, stranger!
//----------------------------------------------->
  function makeShoppingList(item1= 'milk', item2= 'bread', item3= 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }
//===============================================
//Return
function rectangleArea(width, height) {
  let area = width * height;
}
console.log(rectangleArea(5, 7)) // Prints undefined

function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return 'You need positive integers to calculate area!';
  }
  return width * height;
}
//----------------------------------------------->
function monitorCount(rows, columns) {
  return rows*columns;
}
const numOfMonitors = monitorCount(4,5);
console.log(numOfMonitors);
//===============================================
//Helper Functions
function multiplyByNineFifths(number) {
  return number * (9/5);
};
//----------------------------------------------> 
function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};
 
getFahrenheit(15); // Returns 59
//----------------------------------------------->
function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns)*200
}
const totalCost = costOfMonitors(5, 4);
console.log(totalCost)
//===============================================
//Function Expressions
const plantNeedsWater = function(day) {
  if(day === 'Wednesday'){
    return true;
  } else {
    return false;
  }
};

plantNeedsWater('Tuesday');

console.log(plantNeedsWater('Tuesday'));
//===============================================
//Arrow Functions
const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};
//----------------------------------------------->
const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
//===============================================
//Concise Body Arrow Functions
/*
So if we have a function:

const squareNum = (num) => {
  return num * num;
};
We can refactor the function to:

const squareNum = num => num * num;
*/

const plantNeedsWater = day => day === 'Wednesday' ? true : false;

console.log(plantNeedsWater('Wednesday'))
//----------------------------------------------->