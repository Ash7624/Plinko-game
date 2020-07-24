class Part {
    constructor(x,y,width,height){
   var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
   }
   this.body = Bodies.circle(x,y,this.radius,options);
   this.color = color(random(0,255),random(0,255))
   World.add(world,this.body);
    }

    display(){
   var pos = this.body.position;
   rectMode(CENTER);
   fill("white");
   rect(pos.x,pos.y,this.radius);
    }
}