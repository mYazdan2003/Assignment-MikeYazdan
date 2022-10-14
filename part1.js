function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

}

function draw(){
    logo();
    textSize(150);
    textFont('Alegreya Sans SC');
    text('WUSKLL', 410, 238)
    
}

function logo(){
    
    stroke('#000');
    fill('#fff');
    //face
    circle(697, 408, 246)

    //eyes
    rect(554, 408, 102, 51);
    rect(738, 408, 102, 51);
    
    
    //teeth
    rect(595, 534, 21, 75);
    rect(644, 534, 21, 75);
    rect(686, 534, 21, 75);
    rect(728, 534, 21, 75);
    rect(778, 534, 21, 75);

    //chin
    rect(575, 609, 242, 51);

    jaw()
    eyeDetail();

    fill('#e74c3c');
    triangle(656, 323, 615, 323, 615, 238)
    triangle(738, 323, 778, 323, 778, 238)

    //horns
    
}

function eyeDetail(){
    noStroke();
    square(530,408.5, 25);
    square(839,408.5, 25);
}

function jaw(){
    noStroke();
    rect(595, 459, 204, 75);
}

//triangle(x1, y1, x2, y2, x3, y3)
//rect(x, y, w, h)
//square(x, y, s)
//circle(x, y, d)