class Slingshot{
    constructor(bodyA,pointB){
        var constraint_options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length:20
        } 
        this.pointB=pointB
        this.sling = Constraint.create(constraint_options);
        World.add(world, this.sling);
    

    }
    fly(){
        this.sling.bodyA=null;
   
   
       }
       attached(body){
        this.sling.bodyA=body;
          
       }
   
   

    display(){
       
    
        if(this.sling.bodyA){
     var posA = this.sling.bodyA.position;
     var posB = this.pointB;
     strokeWeight(5); 
     stroke("skyblue")
     
      line(posA.x,posA.y, posB.x,posB.y);
    
        }  
     



    }
}