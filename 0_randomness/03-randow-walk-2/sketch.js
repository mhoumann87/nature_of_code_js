/* 
  Author Michael Houmann
  Created 01. March 2025

  Exercise 0.1 from the Nature of Code book.
  Make a random walker that has a greater tendency to walk right and down.
*/

let walker;

function setup() {
  createCanvas(640, 400);
  background(210);

  walker = new Walker;
}

function draw() {
  walker.step();
  walker.show();
}