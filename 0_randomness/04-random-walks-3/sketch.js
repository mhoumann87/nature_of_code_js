/* 
  Author Michael Houmann
  Created 02. March 2025

  Exercise 0-3 from Nature of Code, create a random walker with a 50% chance to follow the mouse pointer and the other 50% split between "normal" walker behavior with an equal chance to move up, down, left right
*/

let walker;

function setup() {
  createCanvas(640, 400);
  background(220);

  walker = new Walker();
}

function draw() {

  walker.step();
  walker.show();
}