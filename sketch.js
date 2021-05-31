
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;
var dustbin1;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 750);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground=new Ground(750,730,1500,20)
	paper=new Paper(200,675,25)
	dustbin1=new Dustbin(1050,600,25,200)
	dustbin2=new Dustbin(1175,710,250,25)
	dustbin3=new Dustbin(1300,600,25,200)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin3.display();
  dustbin2.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paper.body,paper.body.position,{x:150,y:-150});
	}
}



