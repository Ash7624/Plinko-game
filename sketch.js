var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(800,400);

  ground = new Ground(600,height,1200,20);

}

function draw() {
  background(255,255,255);  

for (var k = 0; k<=innerWidth;k+80){
divisions.push(new divisions(k, height-divisionHeight/2,10,divisionHeight));
}

for(var j = 40; j <=innerWidth; j=j+50){
  plinkos.push(new Plinko(j,75));
}
for (var j = 15; j<=width-1; j=j+50){
  plinkos.push(new Plinko(j,175));
}
for(var j = 40; j <=innerWidth; j=j+50){
  plinkos.push(new Plinko(j,275));
}
for (var j = 15; j<=width-1; j=j+50){
  plinkos.push(new Plinko(j,375));
}

for (var j = 0; j < particles.length; j++){
particles[j].display;
}

for (var k = 0; k<divisions.length; k++){
  divisions[k].display();
}

ground.display();

  drawSprites();
}