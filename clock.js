class Clock{
    constructor(x,y,radius,angle){
        var options = {
          isStatic : true,
          friction : 0.5,
          density : 1.2
       }
   
        
        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius
   
     World.add(world,this.body)
       }
   
       
       display(){
         var angle = this.body.angle
           var pos = this.body.position;
           angleMode(DEGREES)
           //ellipseMode(CENTER)
           fill("blue")
           ellipse(pos.x,pos.y,this.radius)
           stroke(255,0,0)
           strokeWeight(7)
           line(680,325,680,200)
           stroke(20)
           strokeWeight(7)
           line(680,325,680,230)
           stroke(255)
           strokeWeight(7)
           line(680,325,680,270)
       }
}