var banana,bananaImage,bananaGroup
var obstacle,obstacleImage
var obstacleGroup
var bg,bgImage
var score 
var monkey, monkeyImage
var ground


function preload()
{
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
  bgImage = loadImage("jungle.jpg");
  
monkeyImage=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
obstacleImage = loadImage("stone.png");
  
banana = loadImage("banana.png");


}
function setup() {
  createCanvas(800, 400);
    bg = createSprite(0,0,800,400)
  bg.addImage(bgImage);
  bg.scale=1.5

  monkey = createSprite(50,340,20,50);
  monkey.addAnimation("running",monkeyImage);
  monkey.scale = 0.1
  ground = createSprite(5,400,900,5)
  ground.visible=false
  
    score = 0
  obstaclesGroup = new Group();
  bananaGroup = new Group();
}

function draw() {
  background(220);
  monkey.collide(ground)
   monkey.velocityY=monkey.velocityY+0.8;
  if(keyWentDown("space")&&monkey.y>300) {
    monkey.velocityY = -20; 
  }
  spawnBanana();
  spawnObstacle();
  if(bananaGroup.isTouching(monkey))
  {
    score=score+2
    bananaGroup.destroyEach();
  }
  ground.x = ground.width /2;
  ground.velocityX = -2;
  if(obstaclesGroup.isTouching(monkey))
  {
    monkey.scale=0.1
  }
  drawSprites();
   stroke("white")
  textSize(20);
  fill("white")
  text("Score: " + score,20,20)
  
  switch(score)
  {
    case 10: monkey.scale=0.12;
      break;
    case 20: monkey.scale=0.14;
      break;
    case 30: monkey.scale=0.16;
      break;
    case 40: monkey.scale=0.18;
      break;
      case 50: monkey.scale=0.2;
      break;
  }
}
function spawnBanana() 
{
  if(frameCount%200===0){
  banana=createSprite(800,random(200,100),20,20);
  banana.velocityX=-10;
  banana.addImage(bananaImage);
  banana.scale=0.1;
  bananaGroup.add(banana);
  banana.lifetime=200
}
}
function spawnObstacle() 
{
  if(frameCount%60===0){
  obstacle=createSprite(800,370,20,20);
  obstacle.velocityX=-7;
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.2;
  obstaclesGroup.add(obstacle)
}
}

