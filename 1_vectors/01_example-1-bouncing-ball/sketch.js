/* 
  Author Michael Houmann
  Created April 15 2025

  Example 1.1: Bouncing Ball with No Vectors
*/

// Global variable for the ball
let ball;

function setup() {
  createCanvas(640, 400);

  // instantiate the ball
  ball = new Ball();
}

function draw() {
  background(220);
  ball.move();
  ball.show();
}