class Ball{
    constructor(){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2,
        }
        this.body = Matter.Bodies.circle(100,100,40,options)
        
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        ellipseMode(CENTER);
        fill("white");
        ellipse(pos.x, pos.y, this.radius);
      }
}