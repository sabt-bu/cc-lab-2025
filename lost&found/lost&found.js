function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent('p5-canvas-container');
}

function draw() {
  // Calculate the center X position of the canvas
  let centerX = width / 2;
  
  // set background blue for sky
  background(135, 206, 235);

  //make rectangle green for grass
  noStroke();
  fill(34,139,34);
  // Grass starts at half the height and covers the whole width
  rect(0, height/2, width, height/2); 
  
  //draw 3 triangles that slightly overlap with each other amongst the grass
  fill(139, 69, 19); // Earth tone color
  blendMode(MULTIPLY); // Causes colors to blend darker where they overlap
  
  // The base Y position for the triangles is 250
  let baseY = 250;
  
  // --- CENTERED TRIANGLE GROUP ---
  
  // The triangles are offset relative to the center, maintaining their original spacing: -10, +10, and 0 from the center point (200).
  
  // first triangle
  push();
  // New X: centerX - 10 (190)
  translate(centerX - 10, baseY); 
  rotate(45);
  triangle(0, 0, -40, -100, 40, -100);
  pop();
  
  // second triangle
  push();
  // New X: centerX + 10 (210)
  translate(centerX + 10, baseY)
  rotate(-45);
  triangle(0, 0, -40, -100, 40, -100);
  pop();
  
  // third triangle 
  push();
  // New X: centerX + 0 (200)
  translate(centerX, baseY)
  rotate(44);
  triangle(0, 0, -40, -100, 40, -100);
  pop();

  blendMode(BLEND);
}