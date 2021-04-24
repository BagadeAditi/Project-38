var play=1
var end=0
var start=-1
var harry, harryImg,harry2,harryImg2,hermione,hermioneImg;
var quidditch, quiditchImg,qG
var cloak, cloakImg
var Mmap, mapImg
var wand, wImg,diadem,dImg,cup,cImg,snitch,sImg, galleon, galleonImg, bludger, bludgerImg, bludgerG,wG,dG,cG,sG,gG
var gameState=start
var points=0
var group,points2=0

function preload(){
harryImg=loadImage("harry.png");
  harryImg2=loadImage("harry.webp");
quidditchImg=loadImage("Quidditchpitch.jpg")
cloakImg=loadImage("cloak1.png")
mapImg=loadImage("map.png")
wImg=loadImage("elderWand.jpg")
dImg=loadImage("diadem.jpg")
cImg=loadImage("cup.jpg")
sImg=loadImage("snitch.png")
gImg=loadImage("galleon.jpg")
bludgerImg=loadImage("bludger.jpg")
hermioneImg=loadImage("hermione.jpg") 
}

function setup() {
createCanvas(600,300)

/*quidditch=createSprite(300,150,600,300)
quidditch.addImage(quidditchImg)
quidditch.velocityX=-4
 
  
harry=createSprite(100,60)
harry.addImage(harryImg)
harry.scale=0.3 
harry.setCollider("rectangle",0,0,500, 300)
harry.debug=false*/
  
  harry2=createSprite(300,180)
harry2.addImage(harryImg2)
  harry2.scale=0.18
 
bludgerG=createGroup();
//qG=createGroup();
group=createGroup();


}

function draw() {
background("cyan")
//qG.add(quidditch)  

  
if(gameState===start){
//quidditch.destroy();
//harry.destroy() ;


textFont("lora")
textSize(20)
fill("orange")
text("While playing Quidditch,", 180,50) 
    
    textFont("lora")
textSize(20)
fill("orange")
text("Harry lost a few of his treasured possessions. Help him find all of them.",  5,80)
    
textFont("lora")
textSize(25)
fill("orange")
text("Are you ready?",  230,280)
    
textFont("lora")
textSize(20)
fill("orange")
text("Press Space to Start.",  50,180)
   
    
textFont("lora")
textSize(20)
fill("orange")
text("Beware of the Bludgers!",  390,160)
  
    
if(keyDown("space")){
  gameState=play
  quidditch=createSprite(300,150,600,300)
  quidditch.addImage(quidditchImg);
  quidditch.scale=1
  quidditch.velocityX=-4

  harry=createSprite(100,60)
  harry.addImage(harryImg)
  harry.scale=0.3 
  //harry.setCollider("rectangle",-50,0,500, 300)
 // harry.debug=false
camera.position.x=quidditch.x
}

  }
if(gameState===play){
harry.y=mouseY  
harry2.destroy();
  if(quidditch.x<0){
  quidditch.x=300  
  }



createEdgeSprites(); 
stuff();

points=points+Math.round(getFrameRate()/60)
bludgers();  

} 

drawSprites();
 textFont("bold")
textSize(20)
fill("black")
text("Distance:"+points, camera.position.x +170,50) 

   textFont("bold")
textSize(20)
fill("black")
text("Points:"+points2, camera.position.x+170,100) 
  
  if(gameState===end){
  textFont("lora")
textSize(20)
fill("orange")
text("Well Done, Hermione is Proud.",  camera.position.x-100,250) 
    
textFont("lora")
textSize(20)
fill("orange")
text("GAME OVER",  camera.position.x-80,230) 
  }
}

function stuff(){
if (frameCount% 100===0) {
var num=Math.round(random(1,10))
switch(num){
    

  case 1 :cloak=createSprite(600,Math.round(random(20,280),10,10))
    cloak.addImage(cloakImg) ;
          cloak.velocityX=-4 
    cloak.scale=0.1
    cloak.lifetime=150
       group.add(cloak)

  
break;

  case 2 :Mmap=createSprite(600,Math.round(random(20,280),10,10)) 
    
Mmap.velocityX=-4
    Mmap.addImage(mapImg); 
          Mmap.scale=0.05
    Mmap.lifetime=150
   group.add(Mmap)

    
break;

   case 3 :wand=createSprite(600,Math.round(random(20,280),10,10)) 
    wand.addImage(wImg);
    wand.velocityX=-4
    wand.scale=0.3
    wand.lifetime=150
  group.add(wand)

     
 break;   

  case 4 : cup=createSprite(600,Math.round(random(20,280),10,10));
         cup.addImage(cImg); 
         cup.velocityX=-4 
    cup.scale=0.2
      cup.lifetime=150
   group.add(cup)

     
    break;

  case 5 :diadem=createSprite(600,Math.round(random(20,280),10,10))
    diadem.addImage(dImg);
    diadem.velocityX=-4  
           diadem.scale=0.2
    diadem.lifetime=150
    group.add(diadem)
 
     
    break;

  case 6 : snitch=createSprite(600,Math.round(random(20,280),10,10))
    snitch.addImage(sImg);
    snitch.velocityX=-4 
    snitch.scale=0.1
     snitch.lifetime=150
    group.add(snitch)

     
    break;


  default:   galleon=createSprite(600,Math.round(random(20,280),10,10)) 
    galleon.addImage(gImg);
    galleon.velocityX=-4
    galleon.scale=0.12
    galleon.lifetime=150
    group.add(galleon)

    
  
   break;    
}
 

if(gameState===end){
qG.destroyEach();
harry.destroy();
cup.destroy() ;
diadem.destroy() ;
wand.destroy() ;
snitch.destroy() ;
bludgerG.destroyEach();
textFont("lora")
textSize(20)
fill("orange")
text("Well Done, Hermione is Proud.",  260,280)

 }

}  
  if( group.isTouching(harry)){
points2=points2+100
group.destroyEach();    
} 
}

function bludgers(){
if (frameCount%150===0 ) {
bludger=createSprite(600, Math.round(random(20,280)));
bludger.addImage(bludgerImg) ;
bludger.velocityX=-4
bludger.scale=0.15  
bludgerG.add(bludger)
bludger.debug=false
bludger.setCollider("rectangle",0,0,bludger.width,bludger.height) 
  
if(bludgerG.isTouching(harry)) {
gameState=end
//qG.destroyEach();
quidditch.destroy();
group.destroyEach();
harry.destroy();
bludgerG.destroyEach();
  hermione=createSprite(camera.position.x,100)
hermione.addImage(hermioneImg)
hermione.scale=0.1

}
} 

}