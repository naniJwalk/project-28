const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var mango1,mango2,mango3;
var backgroundImg,platform;
var stone, boy;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    mango1 = new mango(810, 350);
    mango2 = new mango(670, 220);
    mango3 = new mango(590, 400);

    stone= new stone(200,50);

    //log6 = new Log(230,180,80, PI/2);
    boy = new Boy(stone.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);

    rectMode(CENTER);

    mango1.display();
    mango2.display();
    mango3.display();

    stone.display();

    boy.display();
    
    
    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    boy.fly();
}

function keyPressed(){
    if(keyCode===32){
        boy.attach(stone.body);
    }

function FindCollision(){
    if (this.mango.position.x!==this.mango.position.x && this.mango.position.y!==this.mango.position.y) {
 this.mango.IsStatic=false;
    }
}
}