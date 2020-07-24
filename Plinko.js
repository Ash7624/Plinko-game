class Plinko {
    constructor(x,y,width,height){
   var options = {
       isStatic = true
   }
   this.body = Bodies.circle(x,y,this.radius,options);
   this.radius = 10;
   World.add(world,this.body);
    }

    display(){
   var pos = this.body.position;
   rectMode(CENTER);
   fill("white");
   rect(pos.x,pos.y,10);
    }
}