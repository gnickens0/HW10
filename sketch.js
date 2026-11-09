  let cloudsX = 0;

function setup() {

  createCanvas(400, 400);
  
}

function draw() {

  background(173, 248, 255);

  fill(188, 249, 255);
  noStroke();
  rect(0, 0, 400, 200);

  fill(212, 251, 255);
  noStroke();
  rect(0, 0, 400, 100);

  fill(255, 254, 200);
  noStroke();
  circle(400, 0, 100);

  fill(73, 115, 0);
  stroke(50, 79, 0);
  strokeWeight(10);
  rect(0, 350, 400, 50);

  fill(247, 255, 254);
  noStroke();
  circle(cloudsX, 50, 75);
  circle(cloudsX + 40, 35, 100);
  circle(cloudsX + 80, 55, 45);

  cloudsX++;

  if (cloudsX >= 400) {
    cloudsX = 0;
  }

  strokeWeight(5)
  stroke(0)
  point(mouseX, mouseY);

  strokeWeight(3);
  line(mouseX, mouseY, mouseX + 10, mouseY - 10);
  line(mouseX, mouseY, mouseX - 10, mouseY - 10);

  fill(74, 40, 4);
  rect(315, 335, 50, 75);

  fill(139, 194, 113);
  stroke(93, 153, 65);
  circle(315, 335, 75);
  circle(330, 300, 100);
  circle(340, 340, 75);
  circle(355, 320, 90);

  fill(15, 146, 230);
  noStroke();
  ellipse(125, 365, 200, 60);
  fill(50, 167, 242);
  ellipse(125, 365, 175, 45);

}