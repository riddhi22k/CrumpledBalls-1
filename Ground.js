class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
      this.width=width;
      this.height=height;
      this.groundObj=Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.groundObj);
    }
    display(){
        push();
        rectMode(CENTER);
        fill("yellow");
        stroke(0);
        rect(this.groundObj.position.x,this.groundObj.position.y,this.width,this.height);
        pop();
    }
}