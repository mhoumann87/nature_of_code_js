/* 
  Author Michael Houmann
  Created  April 19 2025

  The following example demonstrates vector subtraction by taking the difference between two points (which are treated as vectors): the mouse position and the center of the window.

  Example 1.3: Vector Subtraction
*/



function setup() {
  createCanvas(640, 400);

}

function draw() {
  background(227);

  // We create a vector for the mouse position
  let mouse = createVector(mouseX, mouseY);
  // and a vector for the center of the canvas
  let center = createVector(width / 2, height /2);

  // And we draw a the original 2 vectors
  strokeWeight(1);
  line(0, 0, mouse.x, mouse.y);
  line(0, 0, center.x, center.y);

  // Now we subtract the center from the mouse position
  mouse.sub(center);

  // And we draw a line that represent the subtraction
  // Move the the 0, 0 to the center of the canvas with translate()
  stroke(0);
  strokeWeight(4);
  translate(width / 2, height / 2);
  line(0, 0, mouse.x, mouse.y);
}