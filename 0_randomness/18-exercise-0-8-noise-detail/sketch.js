/* 
  Author Michael Houmann
  Created April 10 2025

  Exercise 0.8

  Play with color, noiseDetail(), and the rate at which xoff and yoff are incremented to achieve different visual effects.

  It is the same code as in project 0-17

  Perlin noise values are created by adding layers of noise together. The noise layers, called octaves, are similar to harmonics in music. Lower octaves contribute more to the output signal. They define the overall intensity of the noise. Higher octaves create finer-grained details.
  https://p5js.org/reference/p5/noiseDetail/
*/

// Global variables for increments and noise details
let xOffInc = 0.01;
let yOffInc = 0.01;
let detail = 4;

// Create variables to to hold sliders
let sliderDetail;
let xOffSlider;
let yOffSlider;


function setup() {
  createCanvas(640, 400);
  // Set pixel density so it is 1 on all screens
  pixelDensity(1);
  // Create the detail slider
  sliderDetail = createSlider(1, 50, 4);
  // Add some text to the slider
  createP('Change the noiseDetail()', sliderDetail);
  // Add slider for xOffset and add it to the page
  xOffSlider = createSlider(0, 100, 0);
  createP('Change the x offset value', xOffSlider);
  // And do the same for the y offset
  yOffSlider = createSlider(0, 100, 0);
  createP('Change the y offset value', yOffSlider);


}

function draw() {
  // variable for the yOffset
  let yOffset = yOffSlider.value();

  noiseDetail(sliderDetail.value());

  // Tell the program to use the pixel array
  loadPixels();

  // Get all the rows
  for (let y = 0; y < height; y++) {
    // We want to reset xOffset foreach pixel
    let xOffset = xOffSlider.value();
    // and get the pixels
    for (let x = 0; x < width; x++) {
      // And we need to take height for the 4 pixels pr pixel in the array
      let index = (x + y * width) * 4;
      // And we get to calculate the color using the noise() function
      let color = noise(xOffset, yOffset) * 255;
      // And we add the color to the r, g, b values
      pixels[index + 0] = color; // red - No need for the 0, just visual
      pixels[index + 1] = color; // green
      pixels[index + 2] = color; // blue
      pixels[index + 3] = 255; // no transparency 

      // Increment the xOffset
      xOffset += xOffInc;
    }
    // And every time we go through a row we increase the yOff
    yOffset += yOffInc;
  }
  // And remember to update the canvas
  updatePixels();
}