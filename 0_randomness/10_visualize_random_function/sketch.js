/* 
  Author Michael Houmann
  Created 18. March 2025
  
  Visualization of the random() function with a circle that we draw for every random number we "draw"
*/

function setup() {
  createCanvas(640, 400);
}

function draw() {
  background(0);
  stroke(220);
  fill(220);
  // Get the random number
  const x = random(0, width);
  // Draw a circle for the value of tha random number
  circle(x, height / 2, 20);
}