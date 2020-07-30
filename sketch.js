const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var rope, bob, roof;

var world,engine;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	bobdiameter=40;

	//Create the Bodies Here
	
	roof = new Roof(400, 200, 350, 20);
	bob = new Bob(400, 500, 30);

	rope = new Rope(bob.body, roof.body, -bobdiameter*(2), 0);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  rope.display();
  roof.display();
  bob.display();
  drawSprites();
 
}



