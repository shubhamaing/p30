class Box{
    constructor(x,y,width,height){
        var options = {
            restitution: 0.5
        }
        this.body = Bodies.rectangle(x,y,25,45,options);
        this.width = 25;
        this.height = 45;
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("blue");
        rect(pos.x, pos.y, this.width, this.height);
    }
}