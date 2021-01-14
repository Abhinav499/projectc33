const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Contraint = Matter.Contraint;


var plinkos = [];

var divisions = [];
var divisionHeight=300;
var particle;
var score =0;
var turn=0;
gameState="Play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,800,800,20);
 // yellow = new Line(400,450,800,10);

 for (var j = 75; j <=width; j=j+50) 
 {
 
    plinkos.push(new Plinko(j,75,10));
 }

 for (var j = 50; j <=width-10; j=j+50) 
 {
 
    plinkos.push(new Plinko(j,175,10));
 }

  for (var j = 75; j <=width; j=j+50) 
 {
 
    plinkos.push(new Plinko(j,275,10));
 }

  for (var j = 50; j <=width-10; j=j+50) 
 {
 
    plinkos.push(new Plinko(j,375,10));
 }



   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   } 
}
function mousePressed(){
  if(gameState!=="End"){
    turn=turn+1;
    particle=new Particle(mouseX,10,10);
  }
} 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 text("Turns played:"+turn,20,50);
 
  Engine.update(engine);

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  for (var k = 0; k < divisions.length; k++) {
    
    divisions[k].display();
  }

  textSize(40)
 text("100",7,600);
 text("100",87,600);
 text("200",167,600);
 text("200",247,600);
 text("500",327,600);
 text("500",407,600);
 text("200",487,600);
 text("200",567,600);
 text("100",647,600);
 text("100",727,600);

 if (gameState==="End"){
  textSize(30);
  fill("red");
  text("GAME OVER",300,350);
}


  if(particle!=null){
    particle.display();

    if(particle.body.position.y>550){

    if(particle.body.position.x>321 && particle.body.position.x<480){
      score=score+500;
      particle=null;
      if(turn>=5){
        gameState="End";
    }
   }
  

   else if(particle.body.position.x>161 && particle.body.position.x<320||particle.body.position.x>481 && particle.body.position.x<640){
      score=score+200;
      particle=null;
      if(turn>=5){
        gameState="End";
    }
     
   }

    else if(particle.body.position.x>0 && particle.body.position.x<160||particle.body.position.x>641 && particle.body.position.x<800){
      score=score+100;
      particle=null;
      if(turn>=5){
        gameState="End";
      }
    }
  }
  }
 


  // ground.display();
}
