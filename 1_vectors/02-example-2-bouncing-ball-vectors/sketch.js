/* 
  Author Michael Houmann
  Created April 16 2025

  Example 1.2: Bouncing Ball with Vectors!
*/

// Global variable for the ball
let ball;

function setup() {
  createCanvas(640, 400);

  // Instantiate the ball
  ball = new Ball();
}

function draw() {
  background(220);
  ball.move();
  ball.show();
}