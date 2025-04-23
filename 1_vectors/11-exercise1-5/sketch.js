/* 
  Author Michael Houmann
  Created April 23 2025

  Exercise 1.5

  Create a simulation of an object (think about a vehicle) that accelerates when you press the up arrow and brakes when you press the down arrow.
*/

// Global variable for the mover
let mover;



function setup() {
  createCanvas(640, 400);
  // Create a text for user info, color in the style sheet
  createP('Speed up with up arrow, brake with down arrow');

  // Instantiate the mover
  mover = new Mover();
}

function keyPressed() {
  // It is controlled in the mover class
  mover.keyPressed();
}

  function draw() {
    background(227);

    mover.move();
    mover.show();
    mover.checkEdges();

  }
  