var fixedRectangle;
var movingRectangle;

function setup() {
  createCanvas(800,800);
  fixedRectangle=createSprite(400, 200, 50, 100);
  movingRectangle=createSprite(400,250,100,50);
  fixedRectangle.debug=true; 
movingRectangle.debug=true;
fixedRectangle.shapeColor="green";
movingRectangle.shapeColor="green";


movingRectangle.velocityY = -5;
  fixedRectangle.velocityY = +5;
}

function draw() {
  background(255,255,255); 
  
 movingRectangle.x=World.mouseX;
 movingRectangle.y=World.mouseY;

if (isTouching(movingRectangle,fixedRectangle)){
 movingRectangle.shapeColor="red";
fixedRectangle.shapeColor="red";
}
else{
movingRectangle.shapeColor="green";
fixedRectangle.shapeColor="green";
}

bounceoff(movingRectangle,fixedRectangle)


  drawSprites();
}
