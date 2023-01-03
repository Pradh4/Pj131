img="";

function setup(){
canvas = createCanvas(640,480);
canvas.center();
}

function preload(){
    img = loadImage('cake.png');
}

function draw(){
    image( img, 0, 0, 640, 420);
    fill('#FF0000');
    text("cake",45,75);
    noFill();
    stroke('#FF0000');
    rect(30, 60, 450, 350);
}