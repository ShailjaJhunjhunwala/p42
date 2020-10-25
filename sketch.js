const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var clock;
var hr,min,sec;
var scAngle;

function setup() {
  createCanvas(1360,650);
	engine = Engine.create();
  world = engine.world;
  
  clock = new Clock(680, 325, 350);

  Engine.run(engine);
}

function draw() {
  background(0);
  clock.display(); 
  hr = hour();
  min = minute();
  sec = second() 
  drawSprites();
}
function map(){
  scAngle = map(sc,0,60,0,360)
}