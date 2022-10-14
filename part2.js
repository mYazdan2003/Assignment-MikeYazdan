function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    
  }

function draw() {
    background(0);
    saturn();
    ring();
    sinCosineSpectrum();

}

function saturn(){
    
    frameRate = 0.005;

    stroke('#000');
    fill('#2980b9');
    push();
    rotateZ(frameCount * frameRate);
    rotateX(frameCount * frameRate);
    rotateY(frameCount * frameRate);
    sphere(70);
    pop();
}

function ring(){
    noStroke();
    fill('#f39c12');
    translate(0, 0, 0);
    rotateZ(frameCount * frameRate);
    rotateX(frameCount * frameRate);
    rotateY(frameCount * frameRate);
    torus(100, 12);
    push();
    pop();
}

function sinCosineSpectrum(){
    frameRate = 0.008
    stopMotion =0.00002


    noFill();
    stroke('#fff')
    rotateY(frameCount * frameRate);

    for (let h = 0; h <30; h++) {
      push();
      for (let i = 0; i < 150; i++) {
        translate(
          sin(frameCount * stopMotion + h) * 120,
          sin(frameCount * stopMotion + h) * 120,
          i * 0.2
        );
        rotateZ(frameCount * frameRate);
        push();
        box(1, 1, 1);
        pop();
      }
      pop();
    }
}
