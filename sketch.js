//Create variables here
var rocket,rocketImg,space,spaceImg;
var gameState = "earth";

function preload()
{
  //load images here
  rocketImg = loadImage('images/rocket.png');
  spaceImg = loadImage('images/space.jpg'); 
}

function setup() {
	createCanvas(700, 700);
  
  space = createSprite(350,350,700,1400); 
  space.addImage('space', spaceImg);
  space.visible = false 
  space.scale=8;
  space.velocityY = 0.5

  rocket = createSprite(620,600,700,700); 
  rocket.addImage('rocket', rocketImg); 

  ground = createSprite(width/2,height-10,width,20);
  ground.shapeColor = "green"
}


function draw() {  
  background(46,139,87);
  drawSprites();
  if(space.y>700){
    space.y=350
  }
  if(rocket.y <0){
    rocket.y = 650
  }
  //add styles here
  if (gameState === "earth"){
  textSize(20);
  fill(255,255,255);
  text("Mission Moon" , 75,50);
  textSize(15);
  text("Note: press up lauch button to launch rocket ", 75, 100); 

  button=createButton("launch");
  button.position(450,200)
    button.mousePressed(()=>{
      gameState="rocketLaunch"
    })
  }

    //GameState = rocketlaunch, press up arrow to make rocket go up

    if(gameState=="rocketLaunch"){
      fill(255,255,255);
      textSize(15);
      text("Note: press up up arrow to keep rocket going up ", 75, 100); 
      //rocket.chaneImage("rocketLaunch")
      console.log(gameState)
      console.log("rocket y pos",rocket.y)
      if(keyDown("up")){
        rocket.y = rocket.y-10
      }
      if(rocket.y < 0){
        space.visible=true;
      }
    }

}
  
/*
  if(keyWentDown(UP_ARROW) && foodS>0){ 
    foodS = foodS-1; 
    writeStock(foodS); 
    dog.addImage('dog', dogImg1);
    if(foodS <= 0){ x=0; dog.addImage('dog', dogImg); } 
  }
 



function readStock(data){
    foodS = data.val();
}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}
*/