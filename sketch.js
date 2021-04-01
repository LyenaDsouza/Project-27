
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof=new Roof(380,150,500,100);

	bob1=new bob(200,550,40);
	bob2=new bob(300,550,40);
	bob3=new bob(400,550,40);
	bob4=new bob(500,550,40);
	bob5=new bob(600,550,40);

	rope1= new rope(bob1.body,roof.body,-80,0);
    rope2= new rope(bob2.body,roof.body,-40,0);
	rope3= new rope(bob3.body,roof.body,0,0);
	rope4= new rope(bob4.body,roof.body,40,0);
	rope5= new rope(bob5.body,roof.body,80,0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



