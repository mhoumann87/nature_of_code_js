/*
 * A visual demonstration of the random() function in p5.js. Here we have some
 * bars that grows every time that number gets picked.
 */

// First we need an array that keeps track of how many times a number gets picked
const randomCounts = [];
// We also need a variable that holds out total number of slots we have
const total = 20;

function setup() {
  createCanvas(640, 240);

  // Here we populate our array with a 0 for each index, they will increase every time
  // that index gets randomly chosen
  for (let i = 0; i < total; i++) {
    randomCounts[i] = 0;
  }
  // console.log(randomCounts);
}

function draw() {
  // we put the background here, so it refresh for every loop
  background(255);
  stroke(0);
  fill(155);

  // Draw a random number based on out `total` variable
  const choice = floor(random(total));

  // update the array with the chosen number
  randomCounts[choice]++;

  // draw the bars
  for (let x = 0; x < randomCounts.length; x++) {
    rect(total * x, height, total, -randomCounts[x]);
  }
}
