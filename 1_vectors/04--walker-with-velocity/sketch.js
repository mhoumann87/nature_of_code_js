/* 
  Author Michael Houmann
  Created April 18 2025

  Using vector add() function to move the walker
*/

// Global variable for the walker
let walker;

function setup() {
  createCanvas(640, 400);
  background(227);
  // Instantiate the walker
  walker = new Walker(width / 2, height / 2);
}

function draw() {
  walker.move();
  walker.show();
}