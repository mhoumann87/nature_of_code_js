/* 
  Author Michael Houmann
   Created April 7 2025

   This graph will show how tha noise() function works
*/

// Lets create a slider so we can change the "smoothness" of the graph
// We need a value that can move through "time"
let increment = 0.005;
// A global variable so we can "move" the graph
let start = 0;

function setup() {
  createCanvas(640, 400);
}

function draw() {
  background(220);
  stroke(0);
  noFill();

  
  // Like the random graph, we need to begin and end the shape
  beginShape();
  // Here we need an offset value, that "move y through time"
  // Just pick a number, but remember to increase it
  let offset = start;
  // And then we need the for loop to draw across the canvas
  for (let i = 0; i < width; i++) {
    // Then we have to generate the y value and map it to the height
    const y = map(noise(offset), 0, 1, 0, height);
    // And draw the graph
    vertex(i, y);

    // ANd remember to increase the offset.
    offset += increment;
  }

  // Remember to close the shape
  endShape();

  // Increase the start value
  start += increment;
}