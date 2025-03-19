/* 
  Author Michael Houmann
  Created 19. March 2025

  Just as we can visualize the random() function with a circle on canvas, we can do the same with the noise() function.

  But the noise() function are a bit different than the random() function. The random function can work with up to 2 arguments. If we give it 0 arguments, it will return a number between 0 and 0.99, but if we feed it with arguments the first will be the lowest number it will return, and the second will be the highest.

  The noise function are different. If you give it a number, it will return the same number over and over again. It need a "changing" argument, we can see as time, it will return a softer more organic movement in return.
*/
  // A variable for the "time" element
  let xOff = 3;

function setup() {
  createCanvas(640, 400);
}

function draw() {
  background(220);
  stroke(0);
  fill(0);

  // We calculate the value using the noise function and our "time" value xOff
  // The noise function always return a value between 0 and 1, so we have to map it to the full width of the canvas
  const x = map(noise(xOff), 0, 1, 0, width);

  circle(x, height / 2, 20);

  // And remember to increase the "time"
  xOff += 0.01;
}