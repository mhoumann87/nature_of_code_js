/* 
  Author Michael Houmann
  Created April 5 2025

  A "dot" moving around the canvas, where the position is based on perlin noise values
*/
 
// Global variables to set a start "time" for the dot, x and y positions will be calculated from these numbers, but we just call them offsets 1 and 2
let offset1 = 0;
let offset2 = 10000;

/* If we use the same number for both, the dot will just move in a line diagonal on the canvas */

function setup() {
  createCanvas(640, 400);
}

function draw() {
  background(120);

  // Now we use our offsets to generate the x and y coordinates based on the noise function and map them to the width and height of the canvas
  let x = map(noise(offset1), 0, 1, 0, width);
  let y = map(noise(offset2), 0, 1, 0, height);
  // Instead of mapping the values, we could just multiply with width and height
  fill(0);
  circle(x, y, 20)
  // And we have to remember to increase "time"
  offset1 += 0.01;
  offset2 += 0.01;
}