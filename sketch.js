var ball;







function setup() {
  createCanvas(700,700);

ball = createSprite(200,200,100,100);
ball.shapeColor = "green"



}






function draw() 
{
  background(10);

if(keyIsDown(RIGHT_ARROW)){
ball.position.x = ball.position.x+2;



}

if(keyIsDown(LEFT_ARROW)){
  ball.position.x = ball.position.x-2;
}
if(keyIsDown(UP_ARROW)){
  ball.position.y = ball.position.y-2;
}
if(keyIsDown(DOWN_ARROW)){
  ball.position.y = ball.position.y+2;
}













  drawSprites();




}




