/* 
  Author Michael Houmann
  Created 03. march 2025

  Create a "painting" using normal distribution of "place" the paint dots. Also use normal distribution to create the colors.
  Make a slider to adjust the standard deviation
*/

// Create a global variable for the slider
let slider;

function setup() {
  createCanvas(640, 400);
  background(0);
  // Create the slider with min, max and start position
  slider = createSlider(0, 80, 40);
  // Create an informing text
  createP('Change the spread of the dots');
}

function draw() {
  // Base the deviation based on the value of the slider
  const deviation = slider.value();

  // Get random values for the colors
  const red = randomGaussian(200, 100);
  const blue = randomGaussian(200, 100);
  const green = randomGaussian(200,100);

  // Get the placement of the dots based on randomGaussian() with the slider value for deviation
  const w = randomGaussian(width / 2, deviation);
  const h = randomGaussian(height / 2, deviation);

  noStroke()
  // Create a random color and 50% opacity
  fill(red, green, blue, 50);

  // Draw the circle
  circle(w, h, 20);
}