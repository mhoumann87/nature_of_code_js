/* 
  Author Michael Houmann
  Created April 9 2025

  It will not be practical to work with the single pixels in the pixels array, so we can use a nested loop to get to all the loops in the array

  This example is really how the background() function works, but you can play with the pixels, and make different things this way.
*/

function setup() {
  createCanvas(400, 400);
// You can run into problems with high density screens, but in p5js, you can tell the program that a pixel is a pixel, no matter how high resolution the screen has
pixelDensity(1);

}

function draw() {
  background(0);

  // We need a nested for loop, where we take every row and get every column inside that.

  // Remember to call the pixel array;
  loadPixels()
  
  // Get the rows
  for (let y = 0; y < height; y++) {
    // And get the pixels in the row
    for (let x = 0; x < innerWidth; x++) {
      // Remember every pixel is 4 indices, so we have to calculate the single index. 
      // We take the x + y multiply them with the width of the canvas and multiply that with 4
      let index = (x + y * width) * 4;
      // Now we have a single pixel, and we can "play" with that
      // using the method we used in the first example
      pixels[index + 0] = 255; // 0 is just for "show" - full red
      pixels[index + 1] = 0; // No green color
      pixels[index + 2] = 255; // Full blue
      pixels[index + 3] = 255; // no transparency
    }
  }

  // And we have to use the pixels on the canvas
  updatePixels();
}

