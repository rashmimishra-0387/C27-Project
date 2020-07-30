class Roof{
    constructor(x, y, width, height){
       var options={
           isStatic: true
       }

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    }

display(){
   var pos = this.body.position;
   push();
   translate(pos.x, pos.y);
   rectMode(CENTER);
   strokeWeight(3);
   stroke(255);
   fill("grey");
   rect(0, 0, this.width, this.height);
   pop();
 }
}