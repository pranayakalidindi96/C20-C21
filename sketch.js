var fixedR, movingR;

function setup() {
  createCanvas(800,800);

  fixedR = createSprite(400, 400, 30, 80);
  fixedR.shapeColor = "green";

  movingR = createSprite(600,400, 80, 30);
  movingR.shapeColor = "green";

  go1 = createSprite(200,200,50,50);
  go1.shapeColor = "green";

  go2 = createSprite(300,200,50,50);
  go2.shapeColor = "green";
}

function draw() {
  background(0);  

  movingR.x = mouseX;
  movingR.y = mouseY;

  if(isTouching(movingR, go1)){
    go1.shapeColor = "red";
    movingR.shapeColor = "red";
  } else{
    go1.shapeColor = "green";
    movingR.shapeColor = "green";
  }
 


  drawSprites();
}
