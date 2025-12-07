const CIRCLE_RADIUS = 30;
const MAX_LINE_LENGTH = 150;
const LINE_COLOR = [0, 0, 255];

let selfNodeX;
let selfNodeY;
let othersNodeX;
let othersNodeY;
let careActs = [];
let rotation = 0;
let selected = null;
let isPaused = false;

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('p5-canvas-container');
  textFont("Courier New");

  selfNodeX = width * 0.25;
  selfNodeY = height / 2;
  othersNodeX = width * 0.75;
  othersNodeY = height / 2;

  parseData();
}

function parseData() {
  let dataArray = [
    "thursday/waited for friends to take the subway together/served me 77% wasnt alone/served others 78% wasn't alone",
    "thursday/gave directions to stranger on subway/served me 50% felt help/served others 85% knew where to go",
    "thursday/reviewed classmate's resume/served me 50% felt helpful/served others 73% felt supported",
    "monday/didn't do work to spend time with boyfriend/served me 64% cared for him/served others 83% felt cared for",
    "friday/gave mom life updates/served me 52% felt like a good daughter/served others 76% mom felt included",
    "sunday/planned apple picking for DT friends/served me 63% something to look forward to/served others 82% taking initiative",
    "saturday/meal prepped to save parents' money/served me 84% being fed/served others 100% saving them money",
    "sunday/made dip for dt friends/served me 75% cleans out my fridge/served others 95% feeding them",
    "saturday/listened to friend's rant/served me 9% feeling like a good friend/served others 77% feeling heard",
    "friday/listened to esthetician's life/served me 61% could relate to her, turning relationship into something more than just transactional/served others 38% validated how she felt",
    "sunday/planned anniversary with boyfriend/served me 88% spending time with him/served others 87% spending time with me",
    "monday/walked home by myself/served me 83% got exercise and fresh air, helped clear my thoughts/served others 3% saved $2.90",
    "tuesday/sent DT friends pages from Dear Data/served me 72% felt helpful/served others 86% felt inspired",
    "wednesday/shared snacks with friends/served me 70% well fed/served others 70% well fed",
    "wednesday/planned friends bday cake/served me 50% felt like good friend/served others 70% will feel special",
    "thursday/shared snacks with friends/served me 70% well fed/served others 70% well fed",
    "thursday/supported friend's figma event/served me 80% learned figma make/served others 80% felt supported",
    "friday/volunteered for community/served me 80% learning about experiences/served others 80% learning about my experience",
    "friday/bought friend going away gift/served me 50% felt like a good friend/served others 80% felt special",
    "saturday/volunteered for community/served me 80% felt good to give back/served others 80% empowered others"
  ];

  for (let i = 0; i < dataArray.length; i++) {
    let parts = dataArray[i].split("/");
    let selfMatch = parts[2].match(/served me (\d+)% (.+)/i);
    let othersMatch = parts[3].match(/served others (\d+)% (.+)/i);
    if (selfMatch && othersMatch) {
      careActs.push({
        day: parts[0],
        act: parts[1],
        selfValue: parseInt(selfMatch[1]),
        selfNote: selfMatch[2],
        othersValue: parseInt(othersMatch[1]),
        othersNote: othersMatch[2]
      });
    }
  }
}

function draw() {
  background(255, 253, 208);

  drawTitle();
  drawNode(selfNodeX, selfNodeY, "Self");
  drawNode(othersNodeX, othersNodeY, "Others");

  for (let i = 0; i < careActs.length; i++) {
    drawCareAct(careActs[i], i);
  }

  drawSelectedNote();

  if (!isPaused) {
    rotation += 0.01;
  }
}

function drawTitle() {
  fill(LINE_COLOR[0], LINE_COLOR[1], LINE_COLOR[2]);
  textSize(24);
  textAlign(CENTER, TOP);
  text("How Do I Care?", width / 2, 20);
}

function drawNode(x, y, label) {
  stroke(LINE_COLOR[0], LINE_COLOR[1], LINE_COLOR[2]);
  strokeWeight(2);
  noFill();
  ellipse(x, y, CIRCLE_RADIUS * 2);

  fill(LINE_COLOR[0], LINE_COLOR[1], LINE_COLOR[2]);
  noStroke();
  textSize(14);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}

//act of care
function drawCareAct(act, index) {
  let angle = (index / careActs.length) * TWO_PI + rotation;

// how it served me line
  let selfStartX = selfNodeX + cos(angle) * CIRCLE_RADIUS;
  let selfStartY = selfNodeY + sin(angle) * CIRCLE_RADIUS;
  let selfEndX = selfStartX + cos(angle) * (act.selfValue / 100) * MAX_LINE_LENGTH;
  let selfEndY = selfStartY + sin(angle) * (act.selfValue / 100) * MAX_LINE_LENGTH;

// how it served others line
  let othersStartX = othersNodeX + cos(angle) * CIRCLE_RADIUS;
  let othersStartY = othersNodeY + sin(angle) * CIRCLE_RADIUS;
  let othersEndX = othersStartX + cos(angle) * (act.othersValue / 100) * MAX_LINE_LENGTH;
  let othersEndY = othersStartY + sin(angle) * (act.othersValue / 100) * MAX_LINE_LENGTH;

// start/end for interaction
  act.selfStart = { x: selfStartX, y: selfStartY };
  act.selfEnd = { x: selfEndX, y: selfEndY };
  act.othersStart = { x: othersStartX, y: othersStartY };
  act.othersEnd = { x: othersEndX, y: othersEndY };

  drawLine(selfStartX, selfStartY, selfEndX, selfEndY, act === selected);
  drawLine(othersStartX, othersStartY, othersEndX, othersEndY, act === selected);
}

// draw the line
function drawLine(x1, y1, x2, y2, highlight) {
  stroke(LINE_COLOR[0], LINE_COLOR[1], LINE_COLOR[2], 200);
  strokeWeight(highlight ? 4 : 2);
  line(x1, y1, x2, y2);
}

// if mouse is pressed to read
function mousePressed() {
  let found = null;
  for (let i = 0; i < careActs.length; i++) {
    let act = careActs[i];
    if (isNearLine(mouseX, mouseY, act.selfStart, act.selfEnd) ||
        isNearLine(mouseX, mouseY, act.othersStart, act.othersEnd)) {
      found = act;
      break;
    }
  }

  if (found) {
    selected = found;
    isPaused = true;
  } else {
    selected = null;
    isPaused = false;
  }
}

// note of care
function drawSelectedNote() {
  if (!selected) return;

  fill(LINE_COLOR[0], LINE_COLOR[1], LINE_COLOR[2]);
  textSize(12);
  textAlign(LEFT, TOP);

  let lines = [
    selected.day.toUpperCase() + ": " + selected.act,
    "Served Me (" + selected.selfValue + "%): " + selected.selfNote,
    "Served Others (" + selected.othersValue + "%): " + selected.othersNote
  ];

  let x = mouseX + 10;
  let y = mouseY - lines.length * 15;
  if (x + 250 > width) x = mouseX - 260;
  if (y < 0) y = 10;

  for (let i = 0; i < lines.length; i++) {
    text(lines[i], x, y);
    y += 18;
  }
}

// pause rotation
function isNearLine(mx, my, start, end) {
  let d1 = dist(mx, my, start.x, start.y);
  let d2 = dist(mx, my, end.x, end.y);
  let lineLen = dist(start.x, start.y, end.x, end.y);
  return abs(d1 + d2 - lineLen) < 5;
}
