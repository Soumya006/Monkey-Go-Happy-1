
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,survivalTime
var bananaGroup, obstaclesGroup

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(500,400);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("monk",monkey_running);
  monkey.scale=0.125;
  
  ground=createSprite(400,350,900,10);
  ground.x=ground.width/2;
  ground.velocityx=-4;
  
  survivalTime=0;
  score=0;
  
  obstaclesGroup = createGroup();
  bananaGroup = createGroup();
}


function draw() {
  background("lightgreen");
  
  stroke("black");
  textSize("15");
  fill("black");
  text("score: "+score,50,65);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime= Math.ceil(frameCount/frameRate());
  text("survival Time: "+survivalTime,50,50);
  
  monkey.collide(ground);
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("Space")){
    monkey.velocityY=-10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  if(bananaGroup.isTouching(monkey)){
    score=score+1;
    bananaGroup.destroyEach();
  }
  
  
obstacles();
  food();
  drawSprites();
  
}


function obstacles(){
  
  if(frameCount%300===0){
    obstacle=createSprite(400,320,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.125
    obstacle.velocityX=-3;
    obstacle.lifetime=200;
    
    obstaclesGroup.add(obstacle);
  }
}

function food(){
  
  if(frameCount%120===0){
    banana=createSprite(400,200,20,20);
    banana.addImage("banana",bananaImage);
    banana.scale=0.125;
    banana.y = Math.round(random(120,200));
    banana.velocityX=-5;
    banana.lifetime=80;
    
    bananaGroup.add(banana);
  }
}

