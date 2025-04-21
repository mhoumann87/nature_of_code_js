/* 
  Author Michael Houmann
  Created April 21 2025

  This sketch uses normalization to give the vector between the mouse and the center of the canvas a fixed length, regardless of the actual magnitude of the original vector.
  
  Example 1.6: Normalizing a Vector
*/



function setup() {
  createCanvas(640, 400);
}

  function draw() {
    background(227);
    // variables for finding the vcenter of the canvas
    let w = width / 2;
    let h = height / 2;


    // We create a vector for the mouse pointer
    let mouse = createVector(mouseX, mouseY);
    // And a vector for the middle of the canvas
    let middle = createVector(w, h);
    // and we subtract middle from the mouse
    mouse.sub(middle);

    // We move 0, 0 from top left corner to the center of the canvas
    translate(w, h);
    stroke(200);
    strokeWeight(2);
    line(0,0, mouse.x, mouse.y);

    // We normalize the vector (set the length of the vector to 1)
    mouse.normalize();
    // and we multiply it with 50, so the length of the vector will
    // always be 50
    mouse.mult(50);
    // And we draw the vector
    stroke(0);
    strokeWeight(8);
    line(0, 0, mouse.x, mouse.y);
  }
  