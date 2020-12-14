class Log {
    constructor(x,y,height,angle){
        var options = {restitution:0.8,friction:1.5,density:1.0}
    this.body= Bodies.rectangle(x,y,20,height,options)
    this.width = 20
    this.height  =height
    World.add(world,this.body)
    Matter .Body.setAngle(this.body,angle)
    }
    display(){
        var cat = this.body.position
        var angle = this.body.angle
        push()
        translate(cat.x,cat.y)
        rotate (angle)
        rectMode(CENTER)
        strokeWeight(4)
        stroke("green")
        fill (255)
        rect(0,0,this.width,this.height)
        pop ()
    }
    
    
    
    
    
    
    }