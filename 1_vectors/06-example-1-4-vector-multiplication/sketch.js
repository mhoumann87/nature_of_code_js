/* 
  Author Michael Houmann
  Created April 20 2025

  Example 1.4 illustrates vector multiplication by drawing a line between the mouse and the center of the canvas, as in the previous example, and then scaling that line by 0.5.

  Example 1.4: Multiplying a Vector
*/



function setup() {
  createCanvas(640, 400);
}

  function draw() {
    background(227);

    // Create a vector for the mouse position
    let mouse = createVector(mouseX, mouseY);
    // And for the center of the canvas
    let middle = createVector(width / 2, height / 2);
    // Subtract the center from the mouse position
    mouse.sub(middle);

    // Move the 0, 0 point to the middle of the canvas
    translate(width / 2, height / 2);
    strokeWeight(2);
    stroke(200);
    line(0, 0, mouse.x, mouse.y);

    // We now half the vector, by multiplying with 0.5
    mouse.mult(0.5);

    stroke(0);
    strokeWeight(4);
    line(0, 0, mouse.x, mouse.y);
  }
  