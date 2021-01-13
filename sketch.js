//Create variables here
var dog,dogImage,happyDog;
var database;
var foodS,foodStock;
function preload()
{
  //load images here
  dogImage=loadImage("images/dogImg.png")
  happyDog=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(1000, 1000);
  database = firebase.database();

  foodStock=database.ref("Food");
  foodStock.on("value",readStock);


  dog=createSprite(450,500,20,20)
  dog.addImage(dogImage)
  dog.scale=0.5
}


function draw() {  
background(46,139,87)

if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happyDog);
}


  drawSprites();
  //add styles here
  textSize(25)
  stroke("green")
  strokeWeight(5)
  fill("lightGreen")
text("Note: Press Up Arrow Key To Feed Drago Milk!",200,100)
text("Food: "+foodS,200,270)
}

function readStock(data){
foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
x=x-1;
  }

database.ref("/").update({
  Food:x
})

}
