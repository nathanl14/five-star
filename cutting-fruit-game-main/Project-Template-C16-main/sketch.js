//Game States
var startgame;

var newGame

var PLAY=1
var END=0
var gameState=1


function preload(){
  
  
  monsterImage = loadAnimation("alien1.png","alien2.png")
  fruit1 = loadImage("fruit1.png");
  startgameImg= loadImage("start.png")
  fivestarImg=loadImage('five star logo.png')
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  bg_img = loadImage('background.png');
  gameOverImage = loadImage("gameover.png")
  sprintsImg = loadImage("sprints.png")
  gameOverSound = loadSound("gameover.mp3")
  knifeSwooshSound = loadSound("knifeSwoosh.mp3")
}



function setup() {
  createCanvas(600, 600);
  
  //start game logo
   startgame=createSprite(300,350)
   startgame.addImage(startgameImg)
   startgame.scale=0.3
  

   //five star logo
   fivestar=createSprite(300,180)
   fivestar.addImage(fivestarImg)
   fivestar.scale=0.8


  
 

  // Score variables and Groups
  score=0;
  
  
}

function draw() {
  background(300);
  image(bg_img,0,0,width,height);
  
  
  drawSprites();
  if (mousePressedOver(startgame)){
   // gameState=PLAY
    //startgame.visible=false
  //fivestar.visible=false
  }

 // if(gameState=PLAY){
    //startgame.visible=false
  //fivestar.visible=false
  //}
  
 //if(fivestar.visible=false){
  //sprints.createSprite(300,100)
 // sprints.addImage(sprintsImg)
  //sprints.scale=0.7
//  }
  //Display score
  textSize(25);
  text("Score : "+ score,250,50);
}


function newGame(){
 
  
}

function fruits(){
 
}