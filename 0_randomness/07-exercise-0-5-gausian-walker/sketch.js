/* 
  Author Michael Houmann
  Created 04. March 2025

  A random walker, where the randomGaussian() function "decides" the  number of steps both for the x and y axis. The randomGaussian() gives also negative numbers, so you have the possibility for a walk both up, down, left and right.
*/
// Global variable for a walker
let walker;

function setup() {
  createCanvas(640, 400);
  background(220);

  // create a walker
  walker = new Walker;
}

function draw() {
  walker.step();
  walker.show();
}