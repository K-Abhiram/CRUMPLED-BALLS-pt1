
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3,paperObject,ground

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new Box(760,595,20,100);
    box2 = new Box(580,595,20,100);
	box3 = new Box(670,650,200,20);
	paperObject= new Ball(670,650,20);
	ground = new Ground(400,height,800,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();
  box2.display();
  box3.display();
  paperObject.display();
  ground.display();

  drawSprites();
  console.log(paperObject);
 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-405})
	}
}


