/* 
  Author Michael Houmann
  Created 12. March 2025

  A walker that use the noise() function to generate the x and y value for the walker instead of the random() function.
  This gives the walker a smoother and more organic movement.
*/

// Global variable for the walker
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