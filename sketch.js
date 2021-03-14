
var man;
var thunder;
var thunder1;
var thunder2;
var rain;
var maxDrops=100;

for(var i=0;i<maxDrops;i++){
    maxDrops.push(new createDrop(random(0,400),random(0,400)));
}

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function preload(){
 backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    man= new man(700,320,70,70);
    thunder1= new thunder1(700,320,70,70);
    thunder2 = new thunder2(700,320,70,70);
}


function draw(){
    background(backgroundImg);
    Engine.update(engine);  
}   
rand = Math.round(random(1,4));
if(frameCount%80===0){
    thunderCreatedFrame=frameCount;
    thunder=createSprite(random(10,370),random(10,30),10,10);
    switch(rand){
        case 1: thunder.addImage(thunder1);
        break;
        case 2: thunder.addImage(thunder2);
        break;
        default:break;
    }
}
if (this.rain.position.y>height) {
    Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
}
friction:0.1
for(var i=0;i<maxDrops;i++){
    maxDrops.push(new createDrop(random(0,400),random(0,400)));
}
