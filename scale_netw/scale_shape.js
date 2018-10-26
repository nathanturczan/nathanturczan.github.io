class scale_shape {
  // Some variables

  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  // Some functions

  // Display the shape!
  void display() {
    rect(x,y,w,h);
    ellipse(x,y,w,h);
    beginShape();
    vertex(x1,y1);
    vertex(x2,y2);
    vertex(x3,y3);
    vertex(x4,y4);
    // etc;
    endShape();
  }
}