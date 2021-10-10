
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, body;
var rope1, rope2, rope3, rope4, rope5, rope;
var roofObject;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(200,700);
	bobObject2 = new Bob(300,700);
	bobObject3 = new Bob(400,700);
	bobObject4 = new Bob(500,700);
	bobObject5 = new Bob(600,700);

	rope1 = new rope(bobObject1.body, roofObject.body, -bobDiameter*2, 0)
	rope2 = new rope(bobObject2.body, roofObject.body, -bobDiameter*2, 0)
	rope3 = new rope(bobObject3.body, roofObject.body, -bobDiameter*2, 0)
	rope4 = new rope(bobObject4.body, roofObject.body, -bobDiameter*2, 0)
	rope5 = new rope(bobObject5.body, roofObject.body, -bobDiameter*2, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();

  drawSprites();
 
}



