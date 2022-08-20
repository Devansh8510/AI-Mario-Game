function preload() {
	world_start = loadSound("world_start.wav");
	Mariodie=loadSound("mariodie.wav");
	Mariojump=loadSound("jump.wav");
	Mariokick=loadSound("kick.wav");
	Mariocoin=loadSound("coin.wav");
	Mariogameover=loadSound("gameover.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_console");
	loadm=ml5.poseNet(video,modelloaded);
	loadm.on("pose",gotposes);
}

function modelloaded() {
	console.log("Your model has been loaded");
}

function gotposes(results) {
	if (results.length>0) {
		console.log(results);
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
	}
}

function draw() {
	game()
}






