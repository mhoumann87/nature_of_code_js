/* 
  Author Michael Houmann
  Created April 9 2025

  Find the video tutorials on Perlin Noise by Coding Train
    https://youtu.be/Qf4dIN99e2w?feature=shared
    https://youtu.be/YcdldZ1E9gU?feature=shared
    https://youtu.be/y7sgcFhk6ZM?feature=shared

    To make a 2d field of Perlin noise, we do need a 2d array of the pixels in the canvas. It can be tricky to work with a pixel array in p5js, but this video explain this:
    https://youtu.be/nMUMZ5YRxHI?si=BYstvRA0t0z37MHQ
    I have also made a little sketch to explain this under "help_projects"
*/

// A global variable for the value we increment the offsets with
const increment = 0.01;

function setup() {
  createCanvas(640, 400);
  // To be sure it will work on all screen sizes, we set the pixel density ro 1
  pixelDensity(1);
}

function draw() {
  // We need a variable so we can move "through" time, both for y and y
  // We initialize the yOffset here, and the yOffset in the loop
  let yOffset = 0;

  // And we need to "turn the pixel array on"
  loadPixels();

  // We need to get to every pixel in the canvas.
  // First we take the row
  for (let y = 0; y < height; y++) {
    // We want to "reset" the xOffset every time we start on a new line
    let xOffset = 0;
    // then we get every pixel in that row
    for (let x = 0; x < width; x++) {
      // Remember we have 4 pixels for every pixel in our array,
      // red, green, blue, alpha, so we have to calculate the pixel index
      let index = (x + y * width) * 4;
      // Now we can calculate the color for the pixel based on the noise() function
      let color = noise(xOffset, yOffset) * 255;
      // Now we can show all the pixels with the color from the noise() function
      pixels[index + 0] = color; // red + 0 doesn't mean anything, just for show
      pixels[index + 1] = color; // green
      pixels[index + 2] = color // blue
      pixels[index + 3] = 255; // alpha - we don't change the alpha value
      // Every time we add a pixel, we increment the xOffset
      xOffset += increment; 
    }
    // And every time we finish a row, we increment the yOffset
    yOffset += increment;
  }
  // And remember to update the canvas with the pixels
  updatePixels();
}