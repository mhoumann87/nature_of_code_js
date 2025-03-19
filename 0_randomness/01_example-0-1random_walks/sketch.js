// We are making a "walker" class and REMEMBER to add it to the HTML file
let walker;

function setup() {
  createCanvas(640, 400);
  // Create a new walker object
  walker = new Walker();

  background(210);

}

function draw() {
  walker.step();
  walker.show();
}