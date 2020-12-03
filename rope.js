class Rope{
    constructor(body1,body2,point){
        var options = {
            bodyA: body1,
            bodyB:body2,
            pointB: point,
            length: 200,
            stiffness: 1.2
        }
        this.rope = Constraint.create(options);
        this.point = point
        World.add(world,this.rope);
    }
    display(){
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position
            var pointB = this.rope.bodyB.position
             //fill("red")
             stroke("red")
            strokeWeight(4)
            line(pointA.x,pointA.y,pointB.x + this.point.x,pointB.y+this.point.y);
        }
    }

}