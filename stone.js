class stone{
constructor(x,y,r){
var options ={
isStatic : false,
restitution:0,
friction:1,
density:1.2


}
this.x = x;
this, y = y;
this.r = r;
this.image = loadImage("stone.png");
this.body = Bodies.circle(this.x, this.y, this.r, options);
World.add(world, this.body);

}
display(){
var pos = this.body.position;

push();
translate(pos.x, pos.y);
imageMode(CENTER);
image(this.image, 150, 450, this.r, this.r);
rectMode(CENTER);
fill(225, 0, 255);

pop();

}
}
