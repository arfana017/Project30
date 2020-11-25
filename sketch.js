const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score = 0;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  circle = new Obj(170,200,10);

  slingshot = new Slingshot(circle.body,{x:200,y:200});

  ground1 = new Ground(650,270,200,20);
  ground2 = new Ground(390,350,140,20);

//tower1
  block1 = new Box(575,240,30,40);
  block2 = new Box(605,240,30,40);
  block3 = new Box(635,240,30,40);
  block4 = new Box(665,240,30,40);
  block5 = new Box(695,240,30,40);
  block6 = new Box(725,240,30,40);

  block7 = new Box(590,200,30,40);
  block8 = new Box(620,200,30,40);
  block9 = new Box(650,200,30,40);
  block10 = new Box(680,200,30,40);
  block11 = new Box(710,200,30,40);

  block12 = new Box(605,160,30,40);
  block13 = new Box(635,160,30,40);
  block14 = new Box(665,160,30,40);
  block15 = new Box(695,160,30,40);
  
  block16 = new Box(620,120,30,40);
  block17 = new Box(650,120,30,40);
  block18 = new Box(680,120,30,40);


  block19 = new Box(635,80,30,40);
  block20 = new Box(665,80,30,40);

  block21 = new Box(650,40,30,40);

  //tower2
  block22 = new Box(345,320,30,40);
  block23 = new Box(375,320,30,40);
  block24 = new Box(405,320,30,40);
  block25 = new Box(435,320,30,40);

  block26 = new Box(360,280,30,40);
  block27 = new Box(390,280,30,40);
  block28 = new Box(420,280,30,40);

  block29 = new Box(375,240,30,40);
  block30 = new Box(405,240,30,40);

  block31 = new Box(390,200,30,40);

  Engine.run(engine);

}

function draw() {
  background(190,150,225);  

  text("SCORE: " + score,700,40);

  ground1.display();
  ground2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();

  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();

  block12.display();
  block13.display();
  block14.display();
  block15.display();
  
  block16.display();
  block17.display();
  block18.display();

  block19.display();
  block20.display();

  block21.display();

  block22.display();
  block23.display();
  block24.display();
  block25.display();

  block26.display();
  block27.display();
  block28.display();

  block29.display();
  block30.display();

  block31.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();
  block26.score();
  block27.score();
  block28.score();
  block29.score();
  block30.score();
  block31.score();

  circle.display();

  slingshot.display();

  drawSprites();
}

function mouseDragged(){

  Matter.Body.setPosition(circle.body,{x: mouseX, y: mouseY});

}

function mouseReleased() {

slingshot.fly();

}

function keyPressed() {

if(keyCode === 32) {

Matter.Body.setPosition(circle.body,{x:200,y:200});
slingshot.attach(circle.body);

}

}
