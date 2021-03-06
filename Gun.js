class Gun{
    constructor(x,y,width,height){
        var gun_options={
               'restitution':1,
               'density':1,
               'friction':1,
               'isStatic':true
        }
        this.body=Bodies.rectangle(x,y,width,height,gun_options);
        this.height=110;
        this.width=90;
        this.image=loadImage("images/mustard_gun.png");
        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}