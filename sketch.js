
var monkey , monkey_running
var banana ,bananaImage, obstacle,obstacleImage; 
var FoodGroup, obstacleGroup,bananaGroup
var score

function preload(){

  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  ground= createSprite (400,350,950,10)
  ground.velocityX=-4
  ground.x =ground.width/6
  console.log=(ground.x)
  
  bananaGroup= new Group();
  obsactleGroup= new Group();
  var surivalTime=0
  Score=0;
}


function draw(){
  background("crimson");
  
  if(keyDown("space")){ 
     monkey.velocityY=-12
     
     
 }
  monkey.velocityY = monkey.velocityY + 0.8 
  
    if(ground.x<0){
      ground.x = ground.width/2;
    }
monkey.collide(ground);
    
    
 food();
  Obsactles();
drawSprites();
stroke("white")
textSize(20)
  fill("white")
  text("Score:"+ score,500,50)
  
  
   if(obsactleGroup.isTouching(monkey)){
 ground.velocityX=0
    monkey.velocityY=0
  obsactleGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
       obsactleGroup.setLifetimeEach(-1);   
      bananaGroup.setLifetimeEach(-1); 
            
          }
  
  
  stroke("black")
textSize(20)
  fill("black")
  surivalTime=Math.ceil(frameCount/frameRate())
  text("Surival Time:"+surivalTime,100,50);

  
  
}


function food(){
  if(frameCount%80===0){
   var banana=createSprite(600,130,40,10)    
     banana.y=Math.round(random(120,200))
      banana.addImage(bananaImage)
     banana.scale=0.1;
    banana.velocityX=-4
    banana.liftime=300
    bananaGroup.add(banana)
 }
     
     
     
     
     
     
  
}

function Obsactles(){
  if(frameCount%300 === 0){
    obsactle = createSprite(800,320,10,40)         
    obsactle.velocityX = -6
    
    
    obsactle.addImage(obstacleImage)
    obsactle.scale=0.15
  
    
  obsactle.lifetime=300
    obsactleGroup.add(obsactle)
    
  }
    
    
}

