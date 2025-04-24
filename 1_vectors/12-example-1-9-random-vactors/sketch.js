/* 
  Author Michael Houmann
  Created April 24 2025

  We can scale the acceleration to a random value. In Example 1.9, the acceleration vector has both a random direction and a random magnitude from 0 to 2.

  Example 1.9: Motion 101 (Velocity and Random Acceleration)
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
    mover.checkEdges();
    mover.show();
  }
  