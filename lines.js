int i = 0; 

void setup() {
    background(255);
    size(300, 300); 
    smooth();
    frameRate(60);
    strokeWeight(12); // linesssssss
} 

void draw() {
    stroke(random(50), random(255), random(255), 100);
    line(i, 0, random(0, width), height);
    if (i < width) {
        i++;
    } else {
        i = 0; 
    }
}
