let font; 
let startTime;

function preload() {
  
}

  
function setup() {
  createCanvas(windowWidth, windowHeight);
  startTime = millis(); 
  
}

 function draw() {
  
   background(0, 0, 0, 25);
   fill (255);
   
  ellipse(100,100,0);
  textSize(40);
  
  textAlign( CENTER, CENTER)
  push ()
  
  translate (mouseX, mouseY)
  rotate(frameCount/150)
  
  let elapsed = millis() - startTime;

  if (elapsed >= 0) {
    text("Sometimes there are clouds of gloom", 50, 60);
  }

  if (elapsed >= 10000) { // 10 seconds
    text("But these are transient all;", 50, 100);
  }

  if (elapsed >= 20000) { // 20 seconds
    text("If the shower will make the roses bloom,", 50, 140);
  }

  if (elapsed >= 30000) { // 30 seconds
    text("O why lament its fall?", 50, 180);
  }
  preload ();
  pop ()
}







