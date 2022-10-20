let dogs = [{name: "Blaze", color: "black and white"},
 {name: "Izzy", color: "black and brown"}, {name: "Cinderella",
  color: "black and brown"}, {name: "Buttercup", color: "tan"},
   {name: "Grizzly", color: "black"}];

let randomIndex;
let animating = false;
let RandomImages = [];
let imageCounter = 0;

function preload(){

    for (let i = 0; i <= 6; i++){
        RandomImages[i] = loadImage(`assets/RandomImage_${i}.JPG`)
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(200);
    textSize(30);
    textFont('Courier new');
    textAlign(CENTER);
    textStyle(BOLD);
    imageMode(CENTER);
    frameRate(5);

    text("click to randomize", 190, 50);
    fill(random(255), random(255), random(255));

    createButton("click to randomize");
}

function draw() {

    if(animating == true){
        clear();
      image(RandomImages[imageCounter], width/2, height/2);

      if (imageCounter < RandomImages.length - 1)
      imageCounter++;
      console.log(imageCounter);
    } else {
        imageCounter = 0;
    }
}

function randomizer(){
    animating = false;
    if (dogs[0]){ 
    // this displays random name and splices it out of array
        //background(random(200, 255));
        clear();
        background(random(255), random(255), random(255));
        randomIndex = int(random(dogs.length));
        // text(dogs[randomIndex].name + "'s fur is " +
        // dogs[randomIndex].color, 50, 50);
        image(random(RandomImages), windowWidth/2, windowHeight/2);
        text(`${dogs[randomIndex].name}'s fur is ${dogs[randomIndex].color}.`, random(width), random(height));
        fill(random(255), random(255), random(255));
        dogs.splice(randomIndex, 1);
        
    } else {
        background(random(200, 255));
        text("nothing left!", 190, 50);
    }
}

function mousePressed() {
    animating = true;
        setTimeout(randomizer, 1900);

}