/* 
  Author Michael Houmann
  Created April 17 2025


Exercise 1.1
Take one of the walker examples from Chapter 0 and convert it to use vectors.
*/

// Global variable for the walker
let walker;


function setup() {
  createCanvas(640, 400);
  background(220);

  // instantiate the walker
  walker = new Walker();
}

function draw() {
  walker.move();
  walker.show();
}