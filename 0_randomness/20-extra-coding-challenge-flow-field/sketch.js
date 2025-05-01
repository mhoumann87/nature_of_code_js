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
const increment = 0.1;
// A global variable that hold the size of each field
const scale = 10;
// And we need to have some columns and rows;
let cols, rows;
// A variable for framerate
let fr;
// We can use a z offset for "time" and change that in our flow field
let zOffset = 0;

function setup() {
  createCanvas(200, 200);
  // To get it to look alike on all screen resolutions
  // pixelDensity(1);

  // Set up cols and rows based on width, height and scale,
  // We floor the result to be sure to not have any decimal points
  cols = floor(width / scale);
  rows = floor(height / scale);

  // Just to check the framerate
  fr = createP('');
}

  function draw() {
    background(255);
    let yOffset = 0;

    for (let y = 0; y < rows; y++) {
      let xOffset = 0;
      for (let x = 0; x < cols ; x++) {
        // Now we can base our angle of the vector on the noise function
        const angle = noise(xOffset, yOffset, zOffset) * TWO_PI;
        // Create a vector from an angle for the fields
        const v = p5.Vector.fromAngle(angle);
        stroke(0);
        // Limit the effect of the drawing to one field
        push()
        // move the 0, 0 point to right bottom corner of the field
        translate(x * scale, y * scale);
        // Using our vector to rotate direction
        rotate(v.heading());
        line(0, 0, scale, 0);
        // Make the drawing "normal", (pop out of the push() mode)
        pop();
        xOffset += increment;
      }
      yOffset += increment;
      // We cant use the increment variable for the zOffset, it make 
      // it move to fast
      zOffset += 0.001;
    }

    fr.html(floor(frameRate()));
  }
  