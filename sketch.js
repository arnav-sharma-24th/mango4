var boyImage,boybody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	boyImage = loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
 

  mango1 = new Mango(100,100,25);
  ground1 = new Ground(400,600,800,20);
  stone1 = new stone(10,300,65);
  tree1 = new tree(500,300,50,100)
  boybody=createSprite(200, 500, 10,10);
  boybody.addImage(boyImage)
    boybody.scale=0.1;
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  mango1.display();
  ground1.display();
  tree1.display();
  drawSprites();
  stone1.display();
}



