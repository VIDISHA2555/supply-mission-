class Helicopter {
    constructor(x, y, width, height) {
        var options = {
            'friction':0.3,
            'density':1
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("helicopter.png");

        Matter.Body.setStatic(this.body,true);

        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y)
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);

        if(keyCode === LEFT_ARROW) {
        pos.x = pos.x-5;
        }
        if(keyCode === RIGHT_ARROW) {
        pos.x = pos.x+5;
        }
        pop();
      }
    };