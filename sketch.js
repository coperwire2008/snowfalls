const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var bg;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  bg = loadImage("images/snow1.jpg")
  ground = new Ground(400,750,800,40);
}

function preload(){}

  function draw() {
    background("black");
    textSize(20)


    Engine.update(engine);

    imageMode(RADIUS);
    image(bg,0,0,800,800);
    ground.display();   
 
    //display the paricles 
  if(frameCount%10 === 0){
    particles.push(new snow(random(0,800),0)) 
  }
  for (var k = 0; k < particles.length; k++) {
    particles[k].display();
  }
  
  }