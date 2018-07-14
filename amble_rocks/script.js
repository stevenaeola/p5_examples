var image_files = ["bricks", "brown", "coal", "contours", "desert", "grey", "mottled", "sandstone_shells", "strata", "white"];
var imgs;
var trans;

function preload(){
    imgs = [];
    transparencies = []
    for(var i = 0; i < image_files.length; i++){
	loadImage("img/" + image_files[i] + ".jpg", function (img){
	    imgs.push(img);
	    transparencies.push(0);
	});
    }
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    trans = createImage(windowWidth, windowHeight);
    fill(255,0);
//    trans.rect(0, 0, windowWidth, windowHeight);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    trans = createImage(windowWidth, windowHeight);
}

function randomImage(){
    image(random(imgs), 0, 0, windowWidth, windowHeight);

}

function draw(){
    if(frameCount%200 ==0){
	randomImage();
    }

}
