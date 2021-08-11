var snow,snowAnimation;
var backgroundImg;

function preload(){
  snow=loadImage("snow4.webp");
  backgroundImg=loadImage("snow1.jpg");
}
function setup() {
  createCanvas(800,400);
}

function draw() {
  background(backgroundImg);  
  drawSprites();
  createsnow();
  
}
function createsnow(){
  
    if(frameCount%10===0){
      snowflake = createSprite(random(0,800), 0, 50, 50);
      snowflake.velocityX = -2;
      snowflake.velocityY = 4;
      snowflake.addImage(snow);
      snowflake.scale = 0.1;
    }
}