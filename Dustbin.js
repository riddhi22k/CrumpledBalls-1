class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }

      this.width=width;
      this.height=height;
      this.dustbinObj=Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.dustbinObj);
    }
    display(){
         push();
         rectMode(CENTER)
         fill(255,255,255);
         stroke(0)
         rect(this.dustbinObj.position.x,this.dustbinObj.position.y,this.width,this.height)
         pop();
    }
}