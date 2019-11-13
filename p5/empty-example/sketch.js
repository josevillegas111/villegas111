var diam1 = 0;
var r = 255;
var g = 255;
var b = 255;
function setup() {
    createCanvas(500,500);
    
    
}

function draw() {
background("#87ceeb");
fill("#000000"); 
stroke("#ffff00");    
ellipse(mouseX-20,mouseY,20,20); 
fill("#FFE666");
stroke("#ffa500");
strokeWeight(4);    
ellipse(450,40,diam1,diam1);
fill("#a9a9a9");
stroke("#000000");
rect(40,300,200,200);
fill("#ffffff");
stroke("#000000");
rect(50,320,30,30);
fill("#ffffff");
stroke("#000000");
rect(50,380,30,30);    
fill("#ffffff");
stroke("#000000");
rect(50,440,30,30);     
textSize(20);
textFont("Georgia");
textStyle(ITALIC);
text('Good Morning',350,30); 
diam1 = diam1+10;
fill("#d3d3d3");
stroke("#000000");
rect(100,50,100,1000);
fill("#ffffff");
stroke("#000000");
rect(115,100,20,20);
fill("#ffffff");
stroke("#000000");
rect(160,100,20,20);
fill("#ffffff");
stroke("#000000");
rect(115,150,20,20);    
fill("#ffffff");
stroke("#000000");
rect(160,150,20,20);    
fill("#ffffff");
stroke("#000000");
rect(160,200,20,20); 
fill("#ffffff");
stroke("#000000");
rect(115,200,20,20); 
fill("#ffffff");
stroke("#000000");
rect(160,250,20,20);
fill("#ffffff");
stroke("#000000");
rect(115,250,20,20);     
fill("#ffffff");
stroke("#000000");
rect(160,300,20,20); 
fill("#ffffff");
stroke("#000000");
rect(115,300,20,20); 
fill("#ffffff");
stroke("#000000");
rect(160,350,20,20); 
fill("#ffffff");
stroke("#000000");
rect(115,350,20,20);     
fill("#ffffff");
stroke("#000000");
rect(160,400,20,20);     
fill("#ffffff");
stroke("#000000");
rect(115,400,20,20);     
fill("#ffffff");
stroke("#000000");
rect(160,450,20,20);
fill("#ffffff");
stroke("#000000");
rect(115,450,20,20);     
fill("#B37700");
stroke("#000000");    
rect(210,200,200,400);    
fill("#ffffff");
stroke("#000000");    
rect(230,220,50,50);
fill("#ffffff");
stroke("#000000");    
rect(320,220,50,50);
fill("#ffffff");
stroke("#000000");    
rect(320,310,50,50);
fill("#ffffff");
stroke("#000000");    
rect(230,310,50,50);
fill("#ffffff");
stroke("#000000");    
rect(230,400,50,50);
fill("#ffffff");
stroke("#000000");    
rect(320,400,50,50);








}

function mousePressed(){
    if (diam1 >=200){
        diam1 = 0;
    }else{          
    diam1 = diam1 +7;
    }
    r = random(0,255);
    g = random(0,255);
}

function keyPressed(){
    if (diam2 =20){
        diam2 = 20;
    }else{
    diam2 = diam2 
    r =random;
    g =random;   
}
    
    
    
    
}