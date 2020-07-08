var engine,world
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;

var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;
var divide




function setup() {
 engine=Engine.create();
 world=engine.world
  createCanvas(1480,800);
  //createSprite(400, 200, 50, 50);
 divide=new Divisions(200,400,10,300)
 for(var j=0;j<=width;j=j+100){
  divisions.push(new Divisions(j,400,10,divisionHeight))
  //divisions.display();
}
  
 

  Engine.run(engine)
}

function draw() {
  background(25,55,255);  
  console.log(divisions)
  Engine.update(engine);
  
  divide.display();
  //divisions[j].display();
  

  drawSprites();
}