var img;
 
function preload()
{
  // load image
  img = loadImage("assets/01.jpg");
}
 
function setup() 
{
  // set canvas size
  fullscreen(); 
}
 
function draw() 
{
  background(142,65,99);
 
  // display image (img, x, y)
  image(img, 0, 0); 
}