// Miffy's Open Town Adventure
// Moves: Arrow Keys | Interact: SPACE | Restart: Play Again Button

let endSceneImg;
let lakeImg;
let momImg;
let flowersImg;
let orangesImg; 
let latteImg;
let miffyImg;
let borisImg;
let matchaStandImg;
let fruitStandImg;
let flowerStandImg;
let borisHouseImg;
let miffyHouseImg;
let townBgImg; 
let homeBgImg;
let borisBgImg;
let bgMusic;
let endSceneMusic;
let textBlip;
let itemSound;

let miffy;
let speed = 3;
let scene = "town";
let storyStep = 0;

let buildings = [];
let inventory = [];
let dialogue = [];
let activeDialogue = [];
let dialogueIndex = 0;

let playAgainButton = { x: 300, y: 550, w: 200, h: 60, active: false };

// lake
let lake = { x: 80, y: 80, w: 120, h: 80 };

// Miffy
class Character {
  constructor(img, x, y, w, h) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  draw() {
    image(this.img, this.x - this.w / 2, this.y - this.h / 2, this.w, this.h);
  }

  move() {
    if (keyIsDown(LEFT_ARROW)) this.x -= speed;
    if (keyIsDown(RIGHT_ARROW)) this.x += speed;
    if (keyIsDown(UP_ARROW)) this.y -= speed;
    if (keyIsDown(DOWN_ARROW)) this.y += speed;

// lake collision
    if (
      this.x > lake.x - lake.w - 10 &&
      this.x < lake.x + lake.w + 10 &&
      this.y > lake.y - lake.h - 10 &&
      this.y < lake.y + lake.h + 10
    ) {
      if (keyIsDown(LEFT_ARROW)) this.x += speed;
      if (keyIsDown(RIGHT_ARROW)) this.x -= speed;
      if (keyIsDown(UP_ARROW)) this.y += speed;
      if (keyIsDown(DOWN_ARROW)) this.y -= speed;
    }

    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }
}

// preload assets
function preload() {
  endSceneImg = loadImage("./autobiographical_game/endSceneImg.png");
  lakeImg = loadImage("./autobiographical_game/lakeImg.png");
  momImg = loadImage("./autobiographical_game/momImg.png");
  flowersImg = loadImage("./autobiographical_game/flowers.png");
  orangesImg = loadImage("./autobiographical_game/oranges.png");
  latteImg = loadImage("./autobiographical_game/latte.png");
  miffyImg = loadImage("./autobiographical_game/miffyImg.png");
  borisImg = loadImage("./autobiographical_game/borisImg.png");
  matchaStandImg = loadImage("./autobiographical_game/matchaStandImg.png");
  fruitStandImg = loadImage("./autobiographical_game/fruitStandImg.png");
  flowerStandImg = loadImage("./autobiographical_game/flowerStand.png");
  borisHouseImg = loadImage("./autobiographical_game/borisHouseImg.png");
  miffyHouseImg = loadImage("./autobiographical_game/miffyHouseImg.png");
  townBgImg = loadImage("./autobiographical_game/townBackground.png");
  homeBgImg = loadImage("./autobiographical_game/miffyHouseInterior.png");
  borisBgImg = loadImage("./autobiographical_game/borisHouseInterior.png");
  bgMusic = loadSound("./autobiographical_game/bgMusic.mp3");
  endSceneMusic = loadSound("./autobiographical_game/endSceneMusic.mp3");
  textBlip = loadSound("./autobiographical_game/textBlip.mp3");
  itemSound = loadSound("./autobiographical_game/itemSound.mp3");
}

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('p5-canvas-container');
  textAlign(CENTER);
  textSize(16);
  rectMode(CENTER);
  textFont("monospace");

  miffy = new Character(miffyImg, 80, 320, 100, 100);

  bgMusic.loop();
  bgMusic.setVolume(0.1);

  buildings.push({ x: 80, y: 320, scene: "home", img: miffyHouseImg, w: 200, h: 200, name: "Miffy's House" });
  buildings.push({ x: 220, y: 220, scene: "matcha", img: matchaStandImg, w: 160, h: 160, name: "Matcha Cart" });
  buildings.push({ x: 360, y: 260, scene: "fruit", img: fruitStandImg, w: 160, h: 160, name: "Fruit Stand" });
  buildings.push({ x: 460, y: 140, scene: "flower", img: flowerStandImg, w: 160, h: 160, name: "Flower Stand" });
  buildings.push({ x: 460, y: 320, scene: "boris", img: borisHouseImg, w: 240, h: 240, name: "Boris' House" });

  dialogue.push([
    "Mom: 'Good morning, MiffMiff!'",
    "Make sure you eat something healthy",
    "and drink plenty of water.",
    "Be safe always."
  ]);
  dialogue.push([
    "Joaquin: 'Hi Miffy! Would you like a hojicha latte?",
    "Here, take two for your picnic later!",
    "We miss you at the cafe!",
    "Visit again soon!'"
  ]);
  dialogue.push([
    "Chubby: 'Fresh tangerines today, Miffy!",
    "They’ll go perfectly with your hojichas.",
    "Have you read the orange?",
    "There's a line that goes",
    "\"I love you, I'm glad I exist\"'"
  ]);
  dialogue.push([
    "Elly: 'A bouquet for a sweet rabbit!",
    "These will make Boris smile.",
    "I know how much you both",
    "love hydrangeas'"
  ]);
  dialogue.push([
    "Boris: 'Wow, Miff! You brought so much!",
    "And they're all my favorites! What a perfect day.",
    "Let’s have our picnic together.'"
  ]);
}

function draw() {
  switch (scene) {
    case "town":
      drawTown();
      miffy.move();
      drawTopInstructions();
      break;
    case "home":
    case "matcha":
    case "fruit":
    case "flower":
    case "boris":
      drawDialogueScene();
      drawTopInstructions();
      break;
    case "picnic":
      drawPicnicScene();
      break;
  }
}

// instructions
function drawTopInstructions() {
  if (scene === "picnic") return;
  fill(255);
  rect(width/2, 20, 560, 35, 8);
  fill(0);
  textSize(14);
  let nextPlace = storyStep < buildings.length ? buildings[storyStep].name : "Picnic!";
  text("Next: " + nextPlace, width/2, 14);
  text("Inventory: " + (inventory.length ? inventory.join(", ") : "Empty"), width/2, 28);
}

// town
function drawTown() {
  image(townBgImg, 0, 0, width, height);
  image(lakeImg, lake.x - lake.w, lake.y - lake.h, lake.w*2, lake.h*2);

  let target = buildings[storyStep];

  for (let b of buildings) {
    if (b === target) {
      push();
      stroke(255, 255, 0);
      strokeWeight(4);
      fill(255, 255, 0, 40);
      ellipse(b.x, b.y, b.w + 30, b.h + 30);
      pop();
    }
    image(b.img, b.x - b.w/2, b.y - b.h/2, b.w, b.h);
  }

  miffy.draw();

  fill(255);
  rect(width/2, height-20, 560, 30, 10);
  fill(0);
  textSize(14);
  text("Use arrow keys to move. Press SPACE to interact.", width/2, height-20);
}

// talking to other characters
function drawDialogueScene() {
  let bg = townBgImg;
  switch(scene){
    case "home": bg = homeBgImg; break;
    case "boris": bg = borisBgImg; break;
  }

  if(scene === "boris"){
    let zoom = 1.5;
    image(borisBgImg, -width*(zoom-1)/2, -height*(zoom-1)/2, width*zoom, height*zoom);
  } else {
    image(bg, 0, 0, width, height);
  }

  let npcImg;
  if(scene === "home") npcImg = momImg;
  if(scene === "matcha") npcImg = matchaStandImg;
  if(scene === "fruit") npcImg = fruitStandImg;
  if(scene === "flower") npcImg = flowerStandImg;
  if(scene === "boris") npcImg = borisImg;

  if(dialogueIndex < activeDialogue.length){
    if(scene === "boris"){
      image(borisImg, width/2-80, height-250, 160, 160);
      image(miffyImg, width/2-50, height-200, 160, 160);
    } else {
      if(npcImg) image(npcImg, width/2-100, height-300, 160, 160);
      image(miffyImg, width/2-50, height-260, 160, 160);
    }
  }

  fill(255);
  rect(width/2, height-60, 500, 80, 12);
  fill(0);
  textSize(14);
  if(dialogueIndex < activeDialogue.length){
    text(activeDialogue[dialogueIndex], width/2, height-55);
  }
}

// add items and sound (item sound excluded for mom)
function addItem(sceneName){
  if(sceneName==="matcha") {
    inventory.push("2 Hojicha Lattes");
    if (itemSound) { itemSound.setVolume(0.4); itemSound.play(); }
  }
  if(sceneName==="fruit") {
    inventory.push("2 Oranges");
    if (itemSound) { itemSound.setVolume(0.4); itemSound.play(); }
  }
  if(sceneName==="flower") {
    inventory.push("Bouquet");
    if (itemSound) { itemSound.setVolume(0.4); itemSound.play(); }
  }
  if(sceneName==="boris") {
    inventory.push("Picnic with Boris");
  }
}

// end scene
function drawPicnicScene(){
  image(townBgImg,0,0,width,height);
  image(endSceneImg,0,0,width,height);

  let isHover = mouseX > playAgainButton.x - playAgainButton.w/2 &&
                mouseX < playAgainButton.x + playAgainButton.w/2 &&
                mouseY > playAgainButton.y - playAgainButton.h/2 &&
                mouseY < playAgainButton.y + playAgainButton.h/2;

  textSize(32);
  fill(isHover ? "orange":"black");
  noStroke();
  text("Play Again", playAgainButton.x, playAgainButton.y);

  playAgainButton.active = true;
}

// to make sure user goes to building
function keyPressed(){
  if (key === " " && scene === "town" && storyStep < buildings.length) {
    let target = buildings[storyStep];
    let proximity = 50;
    if (
      miffy.x > target.x - proximity &&
      miffy.x < target.x + proximity &&
      miffy.y > target.y - proximity &&
      miffy.y < target.y + proximity
    ) {
      scene = target.scene;
      activeDialogue = dialogue[storyStep].slice();
      dialogueIndex = 0;
    } else {
      console.log("Get closer to the building first!");
    }
  } else if (key === " " && scene !== "town" && scene !== "picnic") {
    if (textBlip && activeDialogue[dialogueIndex]) {
      textBlip.setVolume(0.4);
      textBlip.play();
    }

    dialogueIndex++;

    if (dialogueIndex >= activeDialogue.length) {
      addItem(scene);
      storyStep++;
      if(scene === "boris"){
        scene = "picnic";
        if(bgMusic.isPlaying()) bgMusic.stop();
        if(endSceneMusic) { endSceneMusic.loop(); endSceneMusic.setVolume(0.1); }
      } else {
        scene = "town";
      }
    }
  }
}

// play again
function mousePressed(){
  if(playAgainButton.active){
    if(mouseX > playAgainButton.x - playAgainButton.w/2 &&
       mouseX < playAgainButton.x + playAgainButton.w/2 &&
       mouseY > playAgainButton.y - playAgainButton.h/2 &&
       mouseY < playAgainButton.y + playAgainButton.h/2){
      resetGame();
    }
  }
}

// reset
function resetGame(){
  miffy = new Character(miffyImg, 80, 320, 100, 100);
  storyStep=0;
  inventory=[];
  scene="town";
  playAgainButton.active=false;

  if(endSceneMusic && endSceneMusic.isPlaying()) endSceneMusic.stop();
  if(bgMusic) { bgMusic.loop(); bgMusic.setVolume(0.1); }
}

