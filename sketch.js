const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var divisions = [];
var plinkos = [];
var particles = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);
}

function draw() {
  background(255,255,255);  
  drawSprites();

for (var j = 40; j<= width; j = j+50){
  plinkos.push(new Plinko(j,75));
}
for (var j = 15; j <= width-10; j = j+50){
  plinkos.push(new Plinko(j,175))
}

for (var k = 0; k <= width; k = k+80){
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}



if (frameCount % 60 === 0){
  particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
}

}