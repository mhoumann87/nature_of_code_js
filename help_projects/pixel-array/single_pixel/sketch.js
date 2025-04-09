/* 
  Author Michael Houmann
  Created April 9 2025

  A sketch to explain how the pixel array works in P%JS, see also the video
  https://youtu.be/nMUMZ5YRxHI?si=BYstvRA0t0z37MHQ

  We can use this to load an image from a camera, capture a video or other wise work with pixels in P5JS
*/

function setup() {
  // First we make the canvas like normal
  // A canvas is just a grid of pixels in rows and columns
  createCanvas(100, 100);
}

function draw() {
  background(51);

  // We need  to tell P%JS that we want to work with pixels
  // it will automatically create an array of pixels
  loadPixels();

  // Each pixel in the array have 4 values red, green, blue, alpha, so when we change a single pixel, we need to give four indices, so if we want to change the second pixel in the canvas we will start at index 4 (0 - 3 is the first pixel)

  pixels[4] = 255; // Full red value
  pixels[5] = 255; // Full green value
  pixels[6] = 255; // full blue value
  pixels[7] = 255; // No transparency

  // And when we are done working with the pixels, we have to tell the program to update the canvas
  updatePixels();

  // It is really hard to see when we only change a single pixel, but now the second pixel in the canvas is white.

}