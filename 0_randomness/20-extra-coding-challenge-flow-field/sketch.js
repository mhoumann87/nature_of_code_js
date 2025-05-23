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
// We need an array to store the particles
const particles = [];
// We need an array to store the noise() values for each column and row
let flowField;

function setup() {
  createCanvas(600, 200);
  // To get it to look alike on all screen resolutions
  // pixelDensity(1);

  // Set up cols and rows based on width, height and scale,
  // We floor the result to be sure to not have any decimal points
  cols = floor(width / scale);
  rows = floor(height / scale);

  // Just to check the framerate
  fr = createP('');

  //set up the flowField array
  flowField = new Array(cols * rows);

  // Use the particles array with particles
  for (let i = 0; i < 300; i++) {
    particles[i] = new Particle();
  }
  background(220);
}

  function draw() {
    let yOffset = 0;

    for (let y = 0; y < rows; y++) {
      let xOffset = 0;
      for (let x = 0; x < cols ; x++) {
        // Now we can base our angle of the vector on the noise function
        const angle = noise(xOffset, yOffset, zOffset) * TWO_PI * 4;
        // Create a vector from an angle for the fields
        const v = p5.Vector.fromAngle(angle);
        v.setMag(1);
        // we use the old color calculation, but DO NOT multiply by 4
        const index = x + y * cols;
        // And we fill it with the angle vector v
        flowField[index] = v;
        stroke(0, 50);
        // Limit the effect of the drawing to one field
        /* push()
        // move the 0, 0 point to right bottom corner of the field
        translate(x * scale, y * scale);
        // Using our vector to rotate direction
        rotate(v.heading());
        line(0, 0, scale, 0);
        // Make the drawing "normal", (pop out of the push() mode)
        pop(); */
        xOffset += increment;
      }
      yOffset += increment;
      // We cant use the increment variable for the zOffset, it make 
      // it move to fast
      zOffset += 0.001;
    }

    // Fill the canvas with particles
    for (let i = 0; i < particles.length; i++) {
      particles[i].follow(flowField);
      particles[i].update();
      particles[i].checkEdges();
      particles[i].show();
    }

    fr.html(floor(frameRate()));
  }
  