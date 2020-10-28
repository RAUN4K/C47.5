const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score = 0;
var polygon;
var engine, world;

var backkidIMG, backkidIMG2, backkidIMG3, backkidIMG4
, backkidIMG5, backkidIMG6;

var hoopIMG,basketballIMG, mainkidIMG,mainkidIMG2;
var backgroundIMG;

var mainkid, backkid1,backkid2,backkid3,backkid4,backkid5,backkid6;
var hoop, basketball;
//var ball,ball_image;

function preload(){
  backkidIMG = loadImage("images/backid1.png");
  backkidIMG2 = loadImage("images/backid2.png");
  backkidIMG3 = loadImage("images/backid3.png");
  backkidIMG4 = loadImage("images/backid4.png");
  backkidIMG5 = loadImage("images/backid5.png");
  backkidIMG6 = loadImage("images/backid6.png");

  hoopIMG = loadImage("images/hoop.png");
  mainkidIMG = loadImage("images/mainkid1.png");
  mainkidIMG2 = loadImage("images/mainkid2.png");
  backgroundIMG = loadImage("images/background.png");
  basketballIMG = loadImage("images/basketball.png");

  backdrop = loadImage("images/background.png")
  //ball_image = loadImage("images/basketball.png")

}

function setup() {
createCanvas(1920,1080) 
 engine = Engine.create();
  world = engine.world;

  basketball = new Basketball(100,450,110,110);
 slingShot = new Slingshot(basketball.body,{x:500,y:700});

  /*backdrop = createSprite(960,540,960,540);
  backdrop.addImage(backgroundIMG);
  backdrop.scale = 1.75;

  backdrop2 = createSprite(1550,540,960,540);
  backdrop2.addImage(backgroundIMG);
  backdrop2.scale = 1.75;
  
  backdrop3 = createSprite(375,540,960,540);
  backdrop3.addImage(backgroundIMG);
  backdrop3.scale = 1.75;*/

  backkid1 = createSprite(600,775,10,10);
  backkid1.addImage(backkidIMG);
  backkid1.scale = .75;

  backkid2 = createSprite(800,775,10,10);
  backkid2.addImage(backkidIMG2);
  backkid2.scale = .6;

  backkid3 = createSprite(1000,775,10,10);
  backkid3.addImage(backkidIMG3);
  backkid3.scale = .6;

  backkid4 = createSprite(1200,775,10,10);
  backkid4.addImage(backkidIMG4);
  backkid4.scale = .6;

  mainkid = createSprite(480,850,10,10);
  mainkid.addImage(mainkidIMG);
  mainkid.scale = .655;

  hoop = createSprite(1775,450,10,10);
  hoop.addImage(hoopIMG);
  hoop.scale = .6;

  //ball = Bodies.circle(50,200,20);
  //World.add(world, ball);


}

function draw() {
  background(backgroundIMG);  

  textSize(35);
  fill("white");
  text("SCORE:" + score,750,40);

  basketball.display();
  slingShot.display();
  //imageMode(CENTER);
  //image(ball_image,ball.position.x,ball.position.y, 40,40);


  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(basketball.body, {x: mouseX , y: mouseY});
}

/*function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(basketball.body);
  }
}*/

function mouseReleased(){
  slingShot.fly();
}