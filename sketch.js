var hurdleImg, hurdle, hurdlesGroup;
var trackImg, track;
var runnerImg, runner;
var gameState = "play"

function preload(){
  trackImg = loadImage("track picture.jpeg");
  hurdleImg = loadImage("hurdle coding.png");
  runnerImg = loadImage("track runner coding.jpeg");
}

function setup(){
  createCanvas(600,600);
  track = createSprite(300,300);
  track.addImage("track",trackImg);
  track.velocityY = 1;
  
  hurdlesGroup = new Group();
  
  runner = createSprite(200,200,50,50);
  runner.scale = 0.3;
  runner.addImage("runner", runnerImg);

}

function draw(){
  background(0);
  if (gameState === "play") {
    if(keyDown("left_arrow")){
      runner.x = runner.x - 3;
    }
    
    if(keyDown("right_arrow")){
      runner.x = runner.x + 3;
    }
    
    if(keyDown("space")){
      runner.velocityY = -10;
    }
    
    runner.velocityY = runner.velocityY + 0.8
    
    if(track.y > 400){
      track.y = 300
    }
    spawnHurdles();
  }

    

    if(hurdlesGroup.isTouching(runner)){
      runner.destroy();
      gameState = "end"
    }
    
    if (gameState === "end"){
      stroke("yellow");
      fill("yellow");
      textSize(30);
      text("Game Over", 230,250)
    }
    
    drawSprites();
  

  


}

function spawnHurdles() {
    if( frameCount % 240 === 0) {
    
    var hurdle = createSprite(200,-50);  
    hurdle.x = Math.round(random(120,400));
    hurdle.addImage(doorImg);
    hurdle.velocityY = 1;
    hurdle.lifetime = 800
    hurdle.scale = 0.6


    hurdlesGroup.add(hurdle);
    }


}
