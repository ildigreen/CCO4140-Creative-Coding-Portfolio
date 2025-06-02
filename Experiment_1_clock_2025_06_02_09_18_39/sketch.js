let x = 0;
let y = 0;
let s = 50;
let xSpeed = 1;
let ySpeed = 2;

 
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  x = width/2
  y = height/2
}

function draw() {
  
  let c = color('#FFC107');
  background(c);
  
  ellipse (x,y,s)
  fill('#101110')
  strokeWeight(6)
  
  
  x+= xSpeed
  y+= ySpeed
  if (x>width+s/2)x=-s/2
  if (x< s/2) x + width+ s/2
  if (y > height+s/2)y=-s/2
  if(y>height+s/2)y=-s/2
  translate(width/2, height/2);
  rotate(-90);
  

 
  ellipse (0 ,0 , 250,250)

  
  let hLenght=60;
  let mLenght=75;
  let scLenght=100; 

  let h = hour ();
  let m = minute ();
  let sc = second ();

  
  let hAngle=map(h -12,0,12,0,360);
  let mAngle=map (m,0,60,0,360);
  let scAngle= map (sc, 0, 60, 0, 360);
  
  let hx= hLenght*cos(hAngle);
  let hy= hLenght*sin(hAngle);
  let mx= mLenght*cos(mAngle);
  let my= mLenght*sin(mAngle);
  let scx= scLenght*cos(scAngle);
  let scy= scLenght*sin(scAngle);
  
  strokeWeight(6);
  stroke ('#9E3F9E')
  fill('#FFEB3B');
  
  
 // line (0,0 ,hx,hy);
 // line (0,0 ,mx,my);
 // line (0,0 ,scx,scy);
  
  ellipse (hx,hy,20,20);
  

  ellipse(mx,my,20,20);
  
  
  ellipse (scx,scy,20,20);
  fill ('#23E220')
  
  
  
  
} 

  

