/* 
  Author Michael Houmann
  Created April 21 2025

  The sketch in the next example calculates the magnitude of the vector between the mouse and the center of the canvas, and visualizes it as a rectangle drawn across the top of the window.
  
  Example 1.5: Vector Magnitude
*/



function setup() {
  createCanvas(640, 400);
}

  function draw() {
    background(227);

    // Create a vector for the mouse pointer
    let mouse = createVector(mouseX, mouseY);
    // and a vector for the center of the screed
    let middle = createVector(width / 2, height / 2);
    // And we subtract the center from the mouse placement
    mouse.sub(middle);

    // The magnitude (length) can be accessed by the mag() function in p5.
    // We show the magnitude by drawing a rectangle at the top of the canvas
    let magnitude = mouse.mag();
    fill(0);
    rect(0, 10, magnitude, 10);

    // We move the 0,0 from top left corner to the middle of the screen
    translate(width / 2, height / 2);
    //and we draw a line from 0,0 to the placement of the mousse
    line(0, 0, mouse.x, mouse.y);
  }
  