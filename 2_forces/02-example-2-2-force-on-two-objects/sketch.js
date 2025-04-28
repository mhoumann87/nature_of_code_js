/* 
  Author Michael Houmann
  Created April 28 2025

  Example 2.2: Forces Acting on Two Objects
*/

// Global variables for the movers
let moverA;
let moverB;

function setup() {
  createCanvas(640, 400);
  // Info to the user about applying force
  createP('Click mouse to apply wind force');

  // Instantiate the movers with diff position and mass
  // mover a to the left side of the canvas with larger mass
  moverA = new Mover(200, 30, 10);
  // mover b to the right side and smaller mass
  moverB = new Mover(440, 30, 2);
}

  function draw() {
    background(227);
    const gravity = createVector(0, 0.1);
    // Apply the force
    moverA.applyForce(gravity);
    moverB.applyForce(gravity);

    if (mouseIsPressed) {
      const wind = createVector(0.1, 0);
      moverA.applyForce(wind)
    }

    moverA.update();
    moverA.show();
    moverA.checkEdges();

    moverB.update();
    moverB.show();
    moverB.checkEdges();
  }
  