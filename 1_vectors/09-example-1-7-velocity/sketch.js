/* 
  Author Michael Houmann
  Created April 21 2025

  Example 1.7: Motion 101 (Velocity)
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
  