/* 
  Author Michael Houmann
  Created 04. March 2025

  We pick 2 random numbers between 0 and 1, if the second number is smaller that the first, we use the first number:

  get the first random number: r1
  set that number as a possibility: p = r1
  get the second number: r2
  if r2 is less than p then we use the number r1
  if r2 isn't less than p, then we start over and pick a new p1
*/

// the algorithm for this looks like this:
const acceptReject = () => {
  // do this until we find a qualifying number
  while (true) {
    // Pick a random number
    const r1 = random();
    // assign a probability
    const p = r1;
    // pick the second number
    const r2 = random();
    // Check to see if p1 is a qualified number
    if (r2 < p) {
      return r1;
    }
  }
}

// We can show the numbers we pick, using the method we used in project 02
// We need an array to store the numbers we pick
const randomCounts = [];

function setup() {
  createCanvas(640, 240);

  // We have to populate the array with the numbers assigned and set the first value to 0
  for (let i = 0; i < 20; i++) {
    randomCounts[i] = 0;
  }
}



function draw() {

  // Pick a random number, and increase the count
  const index = int(acceptReject() * randomCounts.length);
  randomCounts[index]++; 

  // Set color for the graph
  background(255);
  stroke(0);
  strokeWeight(2);
  fill(27);

  // Set the width of the elements based on the length of randomCounts array and the width of the canvas
  const w = width / randomCounts.length;

  // Draw the "graph"
  for (let x = 0; x < randomCounts.length; x++) {
    rect(x * w, height - randomCounts[x], w - 1, randomCounts[x]);
  }
}