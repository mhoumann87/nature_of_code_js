/* 
  Author Michael Houmann
  Created April 27 2025 

  Example 2.1: Forces
*/

// Global variable for the mover
let mover;

function setup() {
  createCanvas(640, 400);
  createP("Click mouse to apply force");

  // Instantiate the mover
  mover = new Mover();
}

  function draw() {
    background(227);

    // Create "gravity" for the canvas
    const gravity = createVector(0, 0.1);
    mover.applyForce(gravity);

    if (mouseIsPressed) {
      const wind = createVector(0.1, 0);
      mover.applyForce(wind);
    }

    mover.update();
    mover.display();
    mover.checkEdges();
  }
  