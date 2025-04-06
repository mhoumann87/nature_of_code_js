/* 
  Author Michael Houmann
  Created 12. March 2025

  A random walker that use the noise() function to set the step size.
*/

// A global function for the walker
let walker;

function setup() {
  createCanvas(640, 400);
  background(220);

  // Instantiate the walker
  walker = new Walker();
}

function draw() {
  walker.step();
  walker.show();
}