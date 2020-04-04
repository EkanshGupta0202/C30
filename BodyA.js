class BodyA{
    constructor(x,y,radius){
        
        this.body = Bodies.circle(x,y,radius);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        //var pos = this.body.position;
        var angle = this.body.angle;
        console.log(this.body.speed);

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //pos.x = mouseX;
        //pos.y = mouseY;
        fill("red");
        ellipse(0,0,this.radius);
        pop();
    }
}