var img;
 
function preload()
{
  // load image
  img = loadImage("glad.jpg");
}
 
function setup() 
{
  // set canvas size
  createCanvas(400, 250); 
}
 
function draw() 
{
  background(142,65,99);
 
  // display image (img, x, y)
  image(img, 0, 0); 
}