var bgimg
var bg
var spaceship,spaceshipimg
var star,starimg
var meteroids,meteroidsimg

function preload(){
 bgimg=loadImage("space.jpg")
 spaceshipimg=loadImage("spaceship.png")
 starimg=loadImage("star.png")
 meteroidsimg=loadImage("meteroids.png")

}

function setup(){
 createCanvas(800,600) 
 bg= createSprite(400,300)
 bg.velocityY=0.5
 bg.addImage("moving",bgimg)

 spaceship=createSprite(400,545)
 spaceship.addImage("scrolling",spaceshipimg)
 spaceship.scale=0.3


}

function draw(){
 background("blue")
 if(bg.y>600){
   bg.y=300
 }
 if(keyDown("LEFT_ARROW")&& spaceship.x>60){
   spaceship.x=spaceship.x-50

 }
 if(keyDown("RIGHT_ARROW")&& spaceship.x<740){
  spaceship.x=spaceship.x+50
}
  spawnstars()
 drawSprites()
 text("X"+mouseX+","+"Y"+mouseY,mouseX,mouseY)
}
function spawnstars(){
  if(frameCount%300==0){
    stars=createSprite(random(30,770),1,20,20)

    stars.velocityY=30
    var r=Math.round(random(1,2))
    if(r===1){
      stars.addImage(starimg)
      stars.scale=0.5
    }
    else if(r==2){
      stars.addImage(meteroidsimg)
      stars.scale=0.5
    }
   
  }
 
}