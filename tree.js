class tree {
    constructor(x, y, width, height) {
      var options = {
         isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("tree.png");
      
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
      push();
     
     
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.image, 150, 450, 50,100);
      rectMode(CENTER);
      fill(225, 0, 255);
      
      pop();
      
    }
  };