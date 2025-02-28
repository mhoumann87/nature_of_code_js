/* 
  This project will demonstrate the number of times a random number is picked
*/

// Create an array for how how many random numbers we pick
const randomCounts = [];
// A variable for the numbers we pick in total
const total = 20;

function setup() {
  createCanvas(640, 240);

  // Fill the array with the number of numbers and set the value to 0
  for (let i = 0; i < total; i++) {
    randomCounts[i] = 0;
  }
}

function draw() {
  background(255);

  // Pick a random number and increase the the number for the times this number is picked
  let index = floor(random(randomCounts.length));
  randomCounts[index]++;

  stroke(0);
  fill(127);

  // Set the width of the "graphs" based on ransomCounts
  const w = width / randomCounts.length;

  // Draw the graph of the times a number is picked
  for (let x = 0; x < randomCounts.length; x++) {
    rect(x *  w, height - randomCounts[x], w - 1, randomCounts[x]);
  }
}