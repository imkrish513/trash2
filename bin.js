class Bin {
    constructor(x,y){
    var options = {
        isStatic:true,
    
    }
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 100;
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.image = loadImage("dustbingreen.png");
    World.add(world,this.body)
    
    }
    display(){
        var binpos = this.body.position;
        push()
        translate(binpos.x,binpos.y)
    rectMode(CENTER)
    image(this.image, 0, -20, 175,175);
    image.scale = 10
    pop()
    }
    
    
    
    }