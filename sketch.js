const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box = [];
var rows = 5;
var f = 520;
var g1, g2;
j = f;
a= f;
z = f;
b = f;
o = f;
g = f;
s = f;
var sling, bodyA, bodyB;
var box1 = [];
var box2 = [];
var box3 = [];
var box4 = [];
var box5 = [];
var box6 = [];
var box7 = [];
function setup(){
    createCanvas(700, 700);
    engine = Engine.create();
    world = engine.world;
    bodyA = new BodyA(105,400,40)
    //bodyB = new BodyB(85,400,40,40);
    sling = new Sling(bodyA.body,{x:105,y:400});
    g1 = new Ground(520,562,300,10);
    g2 = new Ground(520,272,300,10);
   for(var i=1;i<5;i++){
    box[i] = new Box(f+15,532,30,30);
    f = f+30;
   }
   /*
   for(var h=1;h<6;h++){
    box1[h] = new Box(j,562,30,30);
    j = j+30;
   }
   */
   for(var k=1;k<3;k++){
    box2[k] = new Box(a+45,502,30,30);
    a = a+30;
   }
   for(var d=1;d<2;d++){
    box3[d] = new Box(z+60,472,30,30);
    z = z+30;
   }
    for(var c=1;c<5;c++){
        box4[c] = new Box(b+15,242,30,30);
        b = b+30;
       }
       /*
    for(var x=1;x<6;x++){
        box5[x] = new Box(o,272,30,30);
        o = o+30;
       }
       */
    for(var y=1;y<3;y++){
        box6[y] = new Box(g+45,212,30,30);
        g = g+30;
       }
    for(var l=1;l<2;l++){
        box7[l] = new Box(s+60,182,30,30);
        s = s+30;
       }
   }



function draw(){
    background("yellow");
    Engine.update(engine);
    for(var i = 1; i < 5; i++){
    box[i].display();
    }
    /*
    for(var h = 1; h < 6; h++){
    box1[h].display();
    }
    */
    for(var k = 1; k < 3; k++){
    box2[k].display();
    }
    for(var d = 1; d < 2; d++){
    box3[d].display();
    }
    for(var c = 1; c < 5; c++){
        box4[c].display();
        }
        /*
        for(var x = 1; x < 6; x++){
        box5[x].display();
        }
        */
        for(var y = 1; y < 3; y++){
        box6[y].display();
        }
        for(var l = 1; l < 2; l++){
        box7[l].display();
        }
    sling.display();
    bodyA.display();
    //bodyB.display();
    g1.display();
    g2.display();
    //console.log(f);
}
function mouseDragged(){
    Matter.Body.setPosition(bodyA.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    sling.fly();
}
function keyPressed(){
    if(keyCode === 32){
        sling.attach(bodyA.body);
    }
}