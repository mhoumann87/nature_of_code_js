/* 
  Author Michael Houmann
  Created April 26 2025

  In this next example, to emphasize the math, We are going to write the code using normalize() and mult(), but this is likely the last time we will do that. You’ll find setMag() in examples going forward.

  Example 1.10: Accelerating Toward the Mouse
*/

// Global variable for the mover
let mover;

function setup() {
  createCanvas(640, 400);

  // Instantiate the mover
  mover = new Mover();
}

  function draw() {
    background(227);

    mover.move();
    mover.show();
  }
  