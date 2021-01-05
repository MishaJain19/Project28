class Stone {
    constructor(x,y,radius){
        var options = {
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.image = loadImage("Images/stone.png");
        this.body=Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
    }
    display(){
        var Pos=this.body.position;
        push ();
        translate(Pos.x,Pos.y);
        //rotate(this.body.angle);
        fill(255,0,255);
        imageMode(CENTER);
        ellipseMode(RADIUS)
        image(this.image,0,0,this.radius,this.radius);
        pop ();
    }
}