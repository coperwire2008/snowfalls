class snow    {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 4,
            isStatic:false

        }
        this.r = 30;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("images/snow5.webp")
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        noStroke();
        fill("white");
        imageMode(RADIUS);
        image(this.image,0,0,this.r,this.r);
        pop();
    }

}; 