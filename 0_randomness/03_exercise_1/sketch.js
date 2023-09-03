/*
 * Create a walker that have a tendency to move down and to the right.
 *
 * Like the other walker algorithms, the walker is described in the Walker class.
 */

// Variable to store the walker
let walker;

function setup() {
  createCanvas(400, 400);
  background(255);

  // Create a new walker
  walker = new Walker();
}

function draw() {
  // Move the walker
  walker.step();
  // Draw the walker
  walker.show();
}
