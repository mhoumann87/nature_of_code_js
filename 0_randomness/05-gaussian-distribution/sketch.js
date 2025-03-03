/* 
  Author Michael Houmann
  Created 03. March 2025

  The randomGaussian() function in p5.js gives you a "normal" distribution of random numbers. 
  Normal distribution (gaussian distribution) will look like a bell curve when drawn in to a cartesian coordinate system. The values cluster around a central value called the mean.
  The cluster's standard deviation is called the spread.
  
  Read more about the function https://p5js.org/reference/p5/randomGaussian/
  or on Wikipedia https://en.wikipedia.org/wiki/Normal_distribution
*/

function setup() {
  createCanvas(640, 240);
  background(220);
}

function draw() {
  // get a random number from the randomGaussian() function with a mean of 320 and a standard deviation of 60
  const x = randomGaussian(320, 60);

  noStroke();
  fill(0, 10); // black with 10% opacity
  // Draw the random number in the middle of the canvas
  circle(x, height / 2, 16);

}