function setup() {

createCanvas(640,480);
capture = createCapture(VIDEO);


}


function draw() {
	image(capture,0,0,640,480);
	filter('INVERT');
	if(mouseIsPressed){
		fill(0);
	} else {
		fill(255);
	}
	ellipse(mouseX,mouseY,80,80);
}