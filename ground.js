class Ground{
    constructor(x, y, width, height) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true 

        }
        this.width = this.width;
        this.height= this.height;
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill("white");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}