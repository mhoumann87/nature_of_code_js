/* 
  Author Michael Houmann
  Created 08. March 2025

  A random walker, where the step size is determined by a squared pick 1 and a normal random number for the second pick. 
  We use the returned number to set the step size, and use a random() function to decide if the walker should move left or right and up or down,
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