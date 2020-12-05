var bullet,speed,weight;
var wall, thickness;
var damage;

function setup() {
  createCanvas(1600,400);

  //intitializing the speed and weight of the bullet
  speed = Math.round(random(223,321));
  weight = Math.round(random(50,52));

  //car and wall
  bullet = createSprite(200,200,60,40);
  bullet.shapeColor = "white";
 bullet.velocityX = speed;

  //intializing the thickness of the wall
  thickness = Math.round(random(22,83));
  
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "orange";

  //calculating damage
  damage = Math.round(0.5 * weight * speed * speed / (thickness * thickness * thickness));
}

function draw() {
  background(0);

  if (isCollided(bullet,wall)) {

    bullet.velocityX = 0;

    if (damage < 10) {
      wall.shapeColor = "green";

      fill("white");
      textSize(25);
      textFont("Courier New");
      text("Status: Good", 1200,50);

    } else if (damage > 10) {
      wall.shapeColor = "red";
    
      fill("white");
      textSize(25);
      textFont("Courier New");
      text("Status: Bad", 1200,50);

    }

    fill("white");
    textSize(25);
    textFont("Courier New");
    text("Speed: " + speed + "mph", 100,50);

    fill("white");
    textSize(25);
    textFont("Courier New");
    text("Weight: " + weight + "g", 400,50);

    fill("white");
    textSize(25);
    textFont("Courier New");
    text("Thickness of wall: " + thickness + "cm", 700,50);





  }








  drawSprites();
}

function isCollided(sprite,target) {
  if (target.x - sprite.x < target.width/2 + sprite.width/2) {
     return true;
  } else {
    return false;
  }
}