var trex, ground
var trexrunning


function preload()
{

trexrunning= loadAnimation("trex1.png","trex3.png","trex4.png")




}


function setup()
{
  createCanvas(600,200)
  trex= createSprite(50,180,50,50)
  trex.addAnimation("running", trexrunning)
  trex.scale=0.5;

  ground=createSprite(300,190,600,20)
  
}


function draw()
{
  background('green')
  drawSprites()


  if(keyDown("space"))
  {
    trex.velocityY=-12
  }

  trex.velocityY= trex.velocityY+0.5

  trex.collide(ground)
}

