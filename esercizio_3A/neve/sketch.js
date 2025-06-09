
let fiocchi
let imgSfondo

        function preload() {
            imgSfondo = loadImage("img/bigfoot.png");
        }


function setup() {
	createCanvas(windowWidth, windowHeight)


	fiocchi = []

	for(let i=0; i<300; i++){
	fiocchi[i] = {
	px : random(0, width),
	py : random(-100),
	dim : random(15, 25),
	vel : random(1,3)
	}
}

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	
		background(164, 225, 225)
imageMode(CENTER)
image(imgSfondo, windowWidth/2, windowHeight/2)

		fill(255)
		textAlign(CENTER, CENTER)

for(let i=0; i<fiocchi.length; i++){
fiocchi[i].px = fiocchi[i].px + random(-1.5, 1.5)
fiocchi[i].py = fiocchi[i].py + fiocchi[i].vel


	if(fiocchi[i].py > height){
		fiocchi[i].py = 0
	}

	textSize(fiocchi[i].dim)
	text("❄", fiocchi[i].px, fiocchi[i].py)

}


}