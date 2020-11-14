//===============================================
//Blocks and Scope
const logSkyColor = () => {
  let color = 'blue'; 
  console.log(color); // blue 
}
//----------------------------------------------->
if (dusk) {
  let color = 'pink';
  console.log(color); // pink
}
//----------------------------------------------->
const city = 'New York City';
function logCitySkyline() {
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
}

  console.log(logCitySkyline());
//===============================================
//Global Scope

const color = 'blue';
 
const returnSkyColor = () => {
  return color; // blue 
};
 
console.log(returnSkyColor()); // blue
//----------------------------------------------->
var satellite = 'The Moon';
var galaxy = 'The Milky Way';
var stars = 'North Star';
  function callMyNightSky(){
    return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
  }
  
  console.log(callMyNightSky());
//===============================================
//Block Scope

const logSkyColor = () => {
  let color = 'blue'; 
  console.log(color); // blue 
};
 
logSkyColor(); // blue 
console.log(color); // ReferenceError

//----------------------------------------------->
function logVisibleLightWaves(){
  const lightWaves = 'Moonlight';
  console.log(lightWaves);
}

logVisibleLightWaves();
console.log(lightWaves);

//===============================================
//Scope Pollution
let num = 50;
 
const logNum = () => {
  num = 100; // Take note of this line of code
  console.log(num);
};
 
logNum(); // Prints 100
console.log(num); // Prints 100
//----------------------------------------------->
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  let stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);
//===============================================
//Practice Good Scoping
const logSkyColor = () => {
  const dusk = true;
  let color = 'blue'; 
  if (dusk) {
    let color = 'pink';
    console.log(color); // pink
  }
  console.log(color); // blue 
};
 
console.log(color); // ReferenceError
//----------------------------------------------->
const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  if (region === 'The Arctic'){
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }
  
  console.log(lightWaves);
};

logVisibleLightWaves();

//----------------------------------------------->