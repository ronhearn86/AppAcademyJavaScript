//===============================================
//For Loops
for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}
//----------------------------------------------->
for (let counter = 5; counter < 11; counter++) {
  console.log(counter);
}
//----------------------------------------------->
for (let counterOne = 1; counterOne < 4; counterOne++){
  console.log(counterOne);
}
//===============================================
//Looping in Reverse
for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}

//===============================================
//Looping through Arrays
const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
for (let i = 0; i < animals.length; i++){
  console.log(animals[i]);
}
//----------------------------------------------->
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i ++) {
  console.log('I would love to visit ' + vacationSpots[i]);
}

//===============================================
//Nested For Loops
const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  }
};
//----------------------------------------------->
var bobsFollowers = ['ass','tits','pussy','vag'];
var tinasFollowers = ['boobs', 'tits', 'ass'];
var mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for(let x = 0; x < tinasFollowers.length; x++) {
    if (bobsFollowers[i] === tinasFollowers[x]){
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
console.log(mutualFollowers)

//===============================================
//While Loops
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}
//----------------------------------------------> 
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;
while (currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

//===============================================
//Do While Loop Statements
let countString = '';
let i = 0;
 
do {
  countString = countString + i;
  i++;
} while (i < 5);
 
console.log(countString);
//----------------------------------------------->
const firstMessage = 'I will print!';
const secondMessage = 'I will not print!'; 
 
// A do while with a stopping condition that evaluates to false
do {
 console.log(firstMessage)
} while (true === false);
 
// A while loop with a stopping condition that evaluates to false
while (true === false){
  console.log(secondMessage)
};
//----------------------------------------------->
var cupsOfSugarNeeded = 5;
var cupsAdded = 0;
do { 
  cupsAdded++;
  console.log(cupsAdded);
} while (cupsOfSugarNeeded > cupsAdded);

//===============================================
//The break Keyword

for (let i = 0; i < 99; i++) {
  if (i > 2 ) {
     break;
  }
  console.log('Banana.');
}
 
console.log('Orange you glad I broke out the loop!');
//----------------------------------------------->
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write you code below
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}

console.log("And if you don't know, now you know.");
