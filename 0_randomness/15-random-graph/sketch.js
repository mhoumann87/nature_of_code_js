/* 
  Author Michael Houmann
  Created April 6 2025

  A graph that shows how the random function "works"
*/

function setup() {
  createCanvas(640, 400);
  

}

function draw() {
  background(220);

  // A for loop that goes through random numbers mapped to the width of the canvas and draw a point for every number
/*   for (let i = 0; i < width; i++ ) {
      stroke(0);
      point(i, random(height));
  }
 */

  // If we instead want to connect all the different random points in the canvas, we can use tge vertex) function

  // We need to tell the program to start the graph
  beginShape();
  // and then we need the for loop to generate the coordinates
  for (let i = 0; i < width; i++) {
    stroke(0);
    vertex(i, random(height));
  }
  // And we have to "stop" the graph again
  endShape();

  // Stop animation
  // noLoop();
  
}