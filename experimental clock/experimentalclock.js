let age = 26;
let hydration = 0;
let gameOver = false;    // game state
let isHydrated = false;  // for hydration status
let lastUpdateTime = 0;  // tracks last time age was updated

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('p5-canvas-container');
  textAlign(CENTER, CENTER);
  lastUpdateTime = millis();
}

function draw() {
  background(255);

  // Instructions
  textSize(14);
  fill(0);
  textAlign(CENTER, CENTER);

  let instructions = [
    "Press SPACE to drink water!",
    "Hydration slows kidney failure."
  ];
  // think of it like a box
  let instrLineSpacing = 18;
  let instrStart = 30;

  for (let i = 0; i < instructions.length; i = i + 1) {
    let y = instrStart + i * instrLineSpacing;
    text(instructions[i], width / 2, y);
  }

  if (!gameOver) {
    // ages over time using millis()
    let currentTime = millis();
    let elapsed = currentTime - lastUpdateTime;
    // Slow down aging by a factor of 10 for a longer game
    let ageRate = 1000; // 1000 milliseconds = 1 game year
    
    if (elapsed >= ageRate) {
      age += 1;
      lastUpdateTime = currentTime;
    }

    if (age >= 57) {
      age = 57;
      gameOver = true;
    }

    // hydration drops over time
    // Reduced drop rate to match the slightly slower age rate
    hydration -= 0.05; 
    hydration = constrain(hydration, 0, 100);

    // kidney color/health based on how much water drank
    // 0 hydration = full red (unhealthy), 100 hydration = light red (healthier)
    let kidneyRed = map(hydration, 0, 100, 255, 100); 

    // --- CENTERING CALCULATIONS ---
    let centerX = width / 2;
    let kidneyY = 250; // Moved down slightly for better visibility
    let kidneyOffset = 70; // Horizontal distance from the center

    // the kidneys
    fill(kidneyRed, 0, 0);
    noStroke();

    // left kidney
    push();
    translate(centerX - kidneyOffset, kidneyY);
    rotate(-0.3);
    ellipse(0, 0, 70, 120);
    pop();

    // right kidney
    push();
    translate(centerX + kidneyOffset, kidneyY);
    rotate(0.3);
    ellipse(0, 0, 70, 120);
    pop();

    // tube that connects the kidneys
    stroke(255, 255, 150);
    strokeWeight(10);
    noFill();
    // Draws the line centered between the two translated points
    line(centerX - kidneyOffset, kidneyY - 40, centerX + kidneyOffset, kidneyY - 40);
    strokeWeight(1);

    // current age vs years left until 57
    fill(0);
    textSize(18);
    text("Age: " + int(age), width / 2, height - 100);
    text("Years until 57: " + int(57 - age), width / 2, height - 75);

    // progress bar for staying hydrated
    stroke(0);
    noFill();
    rect(width / 2 - 100, height - 40, 200, 15);
    noStroke();
    fill(0, 150, 255);
    rect(width / 2 - 100, height - 40, hydration * 2, 15);

  } else {
    // game over
    fill(0);
    textSize(24);
    textAlign(CENTER, CENTER);

    let lines = [
      "You're 57!", 
      "Did you drink enough water?",
      "Kidney health matters.",
      "Press R to restart."
    ];

    let lineSpacing = 30;
    let totalHeight = (lines.length - 1) * lineSpacing;
    let startY = height / 2 - totalHeight / 2;

    for (let i = 0; i < lines.length; i = i + 1) {
      let y = startY + i * lineSpacing;
      text(lines[i], width / 2, y);
    }
  }
}

// game controls
function keyPressed() {
  if (key === ' ') {
    hydration += 20;
    hydration = constrain(hydration, 0, 100);
    isHydrated = true; // player just hydrated
  }
  if (key === 'R' || key === 'r') {
    age = 26; // Restarting age set back to 26
    hydration = 0;
    gameOver = false;
    isHydrated = false;
    lastUpdateTime = millis(); // resets timer
  }
}