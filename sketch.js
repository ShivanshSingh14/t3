const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint =  Matter.Constraint;
var engine, world;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16;
var b17,b18,b19,b20,b21,b22,b23,b24,b25;
var g1,g2,g3;
var polygon;
var sling;
var score=0;
var bg= "i2.jpg"
function preload(){

polygon_img=loadImage("polygon.png")
  getBackgroundImg();
}

function setup(){
var canvas = createCanvas(1300,500);
    engine = Engine.create();
    world = engine.world;
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
  g1=new Ground(670,380,300,10)
  g2=new Ground(1000,250,250,10) 
  g3=new Ground(650,495,1300,10)
  b1=new Block(670,355,30,40)
  b2=new Block(640,355,30,40)
  b3=new Block(610,355,30,40)
  b4=new Block(700,355,30,40)
  b5=new Block(730,355,30,40)
  b6=new Block(760,355,30,40)
  b7=new Block(580,355,30,40)
  b8=new Block(670,315,30,40)
  b9=new Block(640,315,30,40)
  b10=new Block(700,315,30,40)
  b11=new Block(730,315,30,40)
  b12=new Block(610,315,30,40)
  b13=new Block(670,275,30,40)
  b14=new Block(700,275,30,40)
  b15=new Block(640,275,30,40)
  b16=new Block(670,235,30,40)
  b17=new Block(1000,225,30,40)
  b18=new Block(1030,225,30,40)
  b19=new Block(1060,225,30,40)
  b20=new Block(970,225,30,40)
  b21=new Block(940,225,30,40)
  b22=new Block(1000,185,30,40)
  b23=new Block(1030,185,30,40) 
  b24=new Block(970,185,30,40) 
  b25=new Block(1000,145,30,40) 
 polygon=Bodies.circle(200,200,20,options)
 World.add(world,polygon);
 sling=new Slingshot(this.polygon,{x:300,y:200})


 


}

function draw(){
    background("silver");
    Engine.update(engine);


    g1.display();
    g2.display();
    g3.display();
    b1.display("skyblue");
    b2.display("skyblue");
    b3.display("skyblue");
    b4.display("skyblue");
    b5.display("skyblue");
    b6.display("skyblue");
    b7.display("skyblue");
    b8.display("pink");
    b9.display("pink");
    b10.display("pink");
    b11.display("pink");
    b12.display("pink");
    b13.display("lightgreen");
    b14.display("lightgreen");
    b15.display("lightgreen");
    b16.display("grey");
    b17.display("skyblue");
    b18.display("skyblue");
    b19.display("skyblue");
    b20.display("skyblue");
    b21.display("skyblue");
    b22.display("lightgreen");
    b23.display("lightgreen");
    b24.display("lightgreen");
    b25.display("pink");
   

    //score();
              b1.score();
              b2.score();
              b3.score();
              b4.score();
              b5.score();
              b6.score();
              b7.score();
              b8.score();
              b9.score();
              b10.score();
              b11.score();
              b12.score();
              b13.score();
              b14.score();
              b15.score();
              b16.score();
              b17.score();
              b18.score();
              b19.score();
              b20.score();
              b21.score();
              b22.score();
              b23.score();
              b24.score();
              b25.score();
    imageMode(CENTER)
    image(polygon_img,polygon.position.x,polygon.position.y,40,40)
    sling.display()
    ;
    stroke("white")
    textSize(30); 
    fill("black"); 
    text("Dragg The Polygon With Mouse To Shoot And Press Space To Retry ",100,50)
    fill("black"); 
    stroke("white")
    text("Score : " +score,650,100)
   
   
}

  function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
    
    }
    
    function mouseReleased(){
    sling.fly()
    
    }
    
    
    function keyPressed(){
        if(keyCode===32){
        
        sling.attached(this.polygon);
        
        
        }
        
        
        
        
        }

       
        

        async function getBackgroundImg(){
          var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
          var responseJSON = await response.json();
      
          var datetime = responseJSON.datetime;
          var hour = datetime.slice(11,13);
          
          if(hour>=0600 && hour<=1900){
              bg = "i2.png";
          }
          else{
              bg = "i.jpg";
          }
      
          backgroundImg = loadImage(bg);
          console.log(backgroundImg);
      }
    