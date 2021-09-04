const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

let bgImg;

var tower;
let ground,angle,cannon;


function preload(){
  bgImg=loadImage("assets/background.gif");
  
}


function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;
  angle=-PI/4;

  ground = new Ground(0,height-1,width*2,1);
  tower = new Tower(150,350,160,310);
  cannon = new Cannon(180,110,100,50,angle)


  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
image(bgImg,0,0,width,height);
Engine.update(engine);

  ground.display();
  tower.display();
  cannon.display();
 
}

