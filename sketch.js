var bg;
var cat1;
var cat2;
var cat4;
var cat;

var rat1;
var rat2;
var rat4;
var rat;
function preload()  {
    //load the images here
    bg=loadImage("images/garden.png")
    cat1=loadAnimation("images/cat1.png")
    cat2=loadAnimation("images/cat2.png","images/cat3.png")
    cat4=loadAnimation("images/cat4.png")

    rat1=loadAnimation("images/mouse1.png")
    rat2=loadAnimation("images/mouse2.png","images/mouse3.png")
    rat4=loadAnimation("images/mouse4.png")


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat=createSprite(800,600)
    cat.addAnimation("cat1",cat1)
    cat.scale=0.2

    rat=createSprite(200,600)
    rat.addAnimation("rat1",rat1)
    rat.scale=0.2
}

function draw() {
    
    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - rat.x < (cat.width-rat.width)/2){
        cat.velocityX=0
        cat.addAnimation("catLastImage",cat4);
        cat.changeAnimation("catLastImage");
        rat.addAnimation("ratlastimg",rat4);
        rat.changeAnimation("ratlastimg")
    }

    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catRunning",cat2)
        cat.changeAnimation("catRunning");
        rat.addAnimation("ratTeasing",rat2)
        rat.changeAnimation("ratTeasing")
    }

}
