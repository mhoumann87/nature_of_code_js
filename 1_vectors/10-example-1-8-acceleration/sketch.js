/* 
  Author Michael Houmann
  Created April 23 2025

  Algorithm 1: Constant Acceleration

  Acceleration Algorithm 1, a constant acceleration, isn’t particularly interesting, but it’s the simplest and thus an excellent starting point to incorporate acceleration into the code. The first step is to add another variable to the Mover class:

  Example 1.8: Motion 101 (Velocity and Constant Acceleration)
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

    mover.show();
    mover.move();
    mover.checkEdges();
  }
  