var astronaut;



function setup() {
  
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;

}

function draw() {
  
  background(255,255,255);  
  background.addAnimation("iss.png");
 
  if(keyDown("UP_ARROW")) {
  astronaut.addAnimation("brushing", brush);
  astronaut.changeAnimation("brushing");
  astronaut.y = 350;
  astronaut. velocity = 0;
  astronaut. velocity = 0;
  } 

  if(keyDown("DOWN_ARROW")) {
  astronaut.addAnimation("gym.png", gym);
  astronaut.changeAnimation("gym");
  astronaut.y = 350;
  astronaut. velocity = 0;
  astronaut. velocity = 0;
  } 

if(keyDown("LEFT_ARROW")) {
  astronaut.addAnimation("eat.png", eat );
  astronaut.changeAnimation("eat");
  astronaut.y = 350;
  astronaut. velocity = 0;
  astronaut. velocity = 0;
  } 
  if(keyDown("RIGHT_ARROW")) {
astronaut.addAnimation("bath.png",bath );
astronaut.changeAnimation("bath");
astronaut.y = 350;
astronaut. velocity = 0;
astronaut. velocity = 0;
} 
if(keyDown("M")) {
  astronaut.addAnimation("move.png",move );
  astronaut.changeAnimation("move");
  astronaut.y = 350;
  astronaut. velocity = 0;
  astronaut. velocity = 0;
  } 

  drawSprites();
}

function preload () {
  
  background = loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png", "gym12.png", "gym11.png", "gym12.png");
  eat = loadAnimation("eat1.png", "eat2.png");
  drink = loadAnimation("drink1.png", "drink2.png");
  move = loadAnimation("move.png", "move1.png");
}





