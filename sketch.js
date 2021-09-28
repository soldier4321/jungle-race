var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2,fuels, powerCoins;
var cars = [];
var fuelImage, powerCoinImage;
//BP
function preload() {
  backgroundImage = loadImage("./assets/background.jpg");
  car1_img = loadImage("./assets/animal1.png");
  car2_img = loadImage("./assets/animal2.png");
  track = loadImage("./assets/track.png");
  fuelImage = loadImage("./assets/bush.png");
  powerCoinImage = loadImage("./assets/grass.png");
}

//BP
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 
}

//BP
function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
