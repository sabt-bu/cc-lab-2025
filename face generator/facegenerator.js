// Starting variables
let baseFace = 80;
let maxFace = 250;
let eyeSize = 20;
let mouthSize = 30;

function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent('p5-canvas-container');
}

// Draw shiny anime eyes
function drawShinyEyes(x, y, size) {
  fill(0);
  stroke(0);
  strokeWeight(2);
  ellipse(x, y, size, size); // base of eye

  fill(255);
  noStroke();
  ellipse(x - size / 5, y - size / 5, size / 3, size / 3); // bigger twinkle
  ellipse(x + size / 6, y - size / 6, size / 6, size / 6); // smaller twinkle
}

// Randomize the size of his face on click
function mousePressed() {
  eyeSize = random(10, 30);
  mouthSize = random(20, 50); 
  baseFace = random(60, 100);
  maxFace = random(200, 300);
}

function draw() {
  background(255);

// His face grows with mouse
  let faceSize = map(mouseX + mouseY, 0, width + height, baseFace, maxFace);

  push();
  translate(width / 2, height / 2);

// Draw Finn the Human's face
  stroke(0);
  strokeWeight(4);
  fill(240, 222, 199); 
  ellipse(0, 0, faceSize*1.2, faceSize);

// Draw his eyes
  let currentEyeSize = eyeSize * (faceSize / baseFace);
  drawShinyEyes(-faceSize / 4, -faceSize / 8, currentEyeSize);
  drawShinyEyes(faceSize / 4, -faceSize / 8, currentEyeSize);

// Draw his mouth
  noFill();
  stroke(0);
  strokeWeight(4);
  let mouthWidth = faceSize / 5;
  let mouthHeight = map(20, 0, mouthSize, 5, 30);
  arc(0, faceSize / 6, mouthWidth, mouthHeight, 0, PI);

  pop();
  
// Add instructions at bottom
  fill(0);              // text color
  textSize(12);         // font size
  textAlign(CENTER);    // center horizontally
  text("Click on Finn's face (then watch Adventure Time)", width / 2, height - 20); 
  
}
