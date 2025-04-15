/* 
  Author Michael Houmann
  Created April 14 2025

  Exercise 0.10
  Use the noise values as the elevations of a landscape.

  Read about WEBGL in P5JS
  https://p5js.org/reference/p5/WEBGL/
*/

// Global variables for our elements
let land;
let theta = 0.0; // angle

function setup() {
  createCanvas(640, 240, WEBGL);

  // Initiate a new landscape object
  land = new Terrain(20, 800, 400);
}

function draw() {
  land.calculate();
  background(255);
  push();
  translate(0, 20, -200);
  rotateX(PI / 3);
  rotateZ(theta);
  land.render();
  pop();

  theta += 0.0025;
}