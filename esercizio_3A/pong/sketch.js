let posX
let velX
function setup() {
  createCanvas(500, 400)
  posX = 200
  velX = 7
  posY = 100
  velY = 7
}
function draw() {
  posX = posX + velX
  posY = posY + velY
  if(posX >= width){
    velX = -velX
  } else if(posX < 0){
    velX = -velX
  }
  if(posY >= height){
    velY = -velY
  } else if(posY < 0){
    velY = -velY
  }
  background (0, 0, 90)
  push()
  translate(posX, posY)
  rotate(frameCount * 0.05)
  
  colorMode(HSB, 360, 100, 100)
  
  // Colori ad alta saturazione usando HSB
  let hue = (frameCount * 2) % 360
  fill(hue, 100, 100)
  
  colorMode(RGB, 255)
  
  noStroke()
  let starSize = 1 + sin(frameCount * 0.02) * 0.3
  star(0, 0, 20 * starSize, 35 * starSize, 5)
  pop()
}
function star(x, y, r1, r2, n) {
  let angle = TWO_PI / n
  let halfAngle = angle / 2
  beginShape()
  for (let a = 0; a < TWO_PI; a += angle) {
    vertex(x + cos(a) * r2, y + sin(a) * r2)
    vertex(x + cos(a + halfAngle) * r1, y + sin(a + halfAngle) * r1)
  }
  endShape(CLOSE)
}