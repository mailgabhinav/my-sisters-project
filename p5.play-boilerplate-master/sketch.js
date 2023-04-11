var path,girl, boy, leftBoundary, rightBoundary;
var pathImg, girlImg, boyImg;
var coinImg, obstacleImg, backGround;
var i;

function preload() {
  pathImg = loadImage("path.png");
  girlImg = loadImage("girl running.png");
  boyImg = loadImage("boyrunning.jpg");
  coinImg = loadImage("coin.png");
  obstacleImg = loadImage("obstacle.png");
}

function setup() {
  createCanvas(800,400);
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;

  girl = createSprite(180,340,30,30);
  girl.scale=0.08;
  girl.addAnimation("girlRunning",girlImg);

  boy = createSprite(180,340,30,30);
  boy.scale=0.08;
  boy.addAnimation("boyRunning",boyImg);

  createSprite(400, 200, 50, 50);

  leftBoundary=createSprite(0,0,100,800);

  leftBoundary.invisible = true;
  leftBoundary.visible = false;
 
 
 rightBoundary=createSprite(410,0,100,800);
 rightBoundary.visible = false;

backGround = createSprite(200,200,10,10)
backGround.addImage(pathImg);
backGround.scale=0.9
}

function draw() {
  background(255,255,255);
  path.velocityY = 4;
  
  girl.x = World.mouseX;
  boy.y = World.mouseY;

  edges= createEdgeSprites();
  girl.collide(edges[3]);
  girl.collide(leftBoundary);
  girl.collide(rightBoundary);

  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  if(path.y > 400 ){
    path.y = height/2;
  }

  if(path.y > 400 ){
   
  path.y = height/2;
  }

  if(path.y > 400 ){
path.y = height/2;}

if(path.y > 400 ){path.y = height/2;}


if (playerCount === 2) {
  game.update(1);
}

if (gameState === 1) {
  game.play();
}
if (gameState === 2) {
  game.showLeaderboard();
  game.end();

  player.rank+=1;
}

  drawSprites();

}