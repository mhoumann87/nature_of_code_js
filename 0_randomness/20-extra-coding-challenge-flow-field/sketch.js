/* 
  Author Michael Houmann
  Created April 29 2025

  Coding train coding challenge #24 
  Perlin Noise Flow Field

  find the video here:
  https://thecodingtrain.com/challenges/24-perlin-noise-flow-field

  We build on top of project no. 17, see the starting code there
*/

// Global variable for the increment value we use
const increment = 0.01;
// A global variable that hold the size of each field
const scale = 20;
// And we need to have some columns and rows;
let cols, rows;

function setup() {
  createCanvas(640, 400);
  // To get it to look alike on all screen resolutions
  // pixelDensity(1);

  // Set up cols and rows based on width, height and scale,
  // We floor the result to be sure to not have any decimal points
  cols = floor(width / scale);
  rows = floor(height / scale);
}

  function draw() {
    let yOffset = 0;

    for (let y = 0; y < innerHeight; y++) {
      let xOffset = 0;
      for (let x = 0; x < width; x++) {
        // remember 4 pixels for every one in our array
        const index = (x + y * width) * 4;
        // Now we can base our color on the noise function
        let color = noise(xOffset, yOffset) * 255;
        
        xOffset += increment;
      }
      yOffset += increment;
    }
  }
  