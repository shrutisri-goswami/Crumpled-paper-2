const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var dustbinImage,bin;

function preload(){
    dustbinImage = loadImage("Images/dustbingreen.png");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    crumpledPaper = new Paper();

    bin = createSprite();
    bin.addImage(dustbinImage);

    dustbin1 = new Dustbin();
    dustbin2 = new Dustbin();
    dustbin3 = new Dustbin();
}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
    crumpledPaper.display();
    dustbin1.display();
    dustbin2.display();
    dustbin3.display(); 
      
    drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:0,y:0});
    }
}