let tool = 'fountain'; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  background('#141413'); // Dark background
  noCursor();
}

function draw() {
  if (mouseIsPressed) {
    if (tool === 'fountain') {
      fountainPen();
    } else if (tool === 'rainbow') {
      rainbowBrush();
    } else if (tool === 'toothpick') {
      toothpick();
    }
  } else {
    noStroke();
    fill(255);
    circle(mouseX, mouseY, 5);
  }
}

function fountainPen() {
  stroke(330, 100, 100); 
  strokeWeight(1);
  const width = 5;
  line(mouseX - width, mouseY - width, mouseX + width, mouseY + width);
}

function rainbowBrush() {
  strokeWeight(10);
  stroke((frameCount * 10) % 360, 100, 100);
  line(pmouseX, pmouseY, mouseX, mouseY);
}

function toothpick() {
  noStroke();
  fill(51, 100, 100); 

  push();
  translate(mouseX, mouseY);
  const angle = Math.atan2(mouseY - pmouseY, mouseX - pmouseX);
  rotate(angle);

  const minSize = 4;
  const distance = dist(mouseX, mouseY, pmouseX, pmouseY);
  ellipse(0, 0, distance * 18 + minSize, minSize);
  pop();
}

function keyPressed() {
  if (key === '1') {
    tool = 'fountain';
  } else if (key === '2') {
    tool = 'rainbow';
  } else if (key === '3') {
    tool = 'toothpick';
  } else if (key === 'c' || key === 'C') {
    background('#141413');
  }
}

// Prevent page scrolling on touch devices while drawing
function touchMoved() {
  return false;
}

11