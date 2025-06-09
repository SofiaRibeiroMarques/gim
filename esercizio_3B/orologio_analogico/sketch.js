
        function setup() {
            createCanvas(windowWidth, windowHeight);
        }
        function windowResized() {
            resizeCanvas(windowWidth, windowHeight);
        }
        function draw() {
            // Sfondo azzurro
            background(230, 230, 230);
            
            translate(width/2, height/2);
            

            fill(255);
            stroke(0);
            strokeWeight(4);
            ellipse(0, 0, 680);
            

            noStroke();
            fill(0);
            

            for(let i = 0; i < 60; i++) {
                push();
                rotate(i / 60 * TWO_PI);
                if (i % 5 == 0) {

                    push();
                    translate(0, -280);
                    rotate(-i / 60 * TWO_PI); 
                    textAlign(CENTER, CENTER);
                    textFont('Futura');
                    textSize(40);
                    fill(0);
                    text("MAI", 0, 0);
                    pop();
                }
                pop();
            }
            
            push();
            textAlign(LEFT, CENTER);
            textFont('Courier New');
			textStyle(BOLD);
            textSize(30);
            fill(225, 0, 0);
            text("Quando mi iscriverò", -175, -120);
            text("in palestra?", -110, -80);
            pop();
            

            push();
            const angoloOre = (hour() / 12 + minute() / 60 / 12) * TWO_PI;
            rotate(angoloOre);
            fill(0);
            rect(-4, 30, 8, -200);
            pop();
            
            push();
            const angoloMinuti = minute() / 60 * TWO_PI;
            rotate(angoloMinuti);
            fill(0);
            rect(-3, 30, 6, -270);
            pop();
            

            push();
            const angoloSecondi = second() / 60 * TWO_PI;
            rotate(angoloSecondi);
            fill(255, 0, 0);
            rect(-1, 30, 2, -300);
            pop();
            
    
            fill(0);
            ellipse(0, 0, 20);
        }
