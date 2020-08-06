var man, man_running, man_collided;
var ground, invisibleGround, groundImage;

var cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6, obstacles2, obstacles1;


function preload(){
  man_running = loadAnimation("1running-removebg-preview (1).png","2running-removebg-preview (1).png","3running-removebg-preview (1).png","4running-removebg-preview (1).png","5running-removebg-preview (1).png","6running-removebg-preview (1).png");
  
  cloudImage = loadImage("hd cloud.png");
  
  obstacle1 = loadImage("obstaclefireball.png");
  obstacle2 = loadImage("obstaclerock.png");
  obstacle3 = loadImage("obstaclespikes.png");

  img = loadImage("bg running game.png");
  
}

function setup() {
  createCanvas(600, 200);

  background1 = createSprite(300,100,600,200);
  background1.addImage("image",img);
  

  background2 = createSprite(-350,100,600,200);
  background2.addImage("image",img);
  
  
  background3 = createSprite(-1000,100,600,200);
  background3.addImage("image",img);
  
  man = createSprite(550,180,20,50);
  man.addAnimation("running", man_running);
  man.scale = 0.8;
  
  invisibleGround = createSprite(300,190,600,10);
  invisibleGround.visible = false;

  
  cloudsGroup = new Group();
  obstaclesGroup = new Group();

  var cloud = createSprite(0,30,40,10);
  cloud.addImage(cloudImage);
  cloud.scale = 0.2;
  cloud.velocityX = 0;

  obstacles1 = createSprite(-5,163,10,40);
    obstacles1.velocityX = 5;
    obstacles1.addImage(obstacle1);
    obstacles1.scale = 0.4

  obstacles2 = createSprite(-400,163,10,40);
    obstacles2.velocityX = 2;
    obstacles2.addImage(obstacle2);
    obstacles2.scale = 0.4

  var obstacles3 = createSprite(-600,163,10,40);
    obstacles3.velocityX = 0;
    obstacles3.addImage(obstacle3);
    obstacles3.scale = 0.4
  
  
}

function draw() {

  background(0);

  man.velocityX = -13
  
  if(keyDown("space")&&man.y>145) {
    man.velocityY = -10;
  }
  
  man.velocityY = man.velocityY + 0.8
  
  man.collide(invisibleGround);
  drawSprites();

  camera.position.x = man.x-200
  invisibleGround.x = man.x

   if(man.x<-745){
     man.x = 550
     obstacles2.x = -400;
     obstacles1.x = 0;
   }
   
  
}