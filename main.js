lx = 0;
rx = 0;
size = 0;

function preload(){

}
function setup(){
canvas = createCanvas(550,500);
video = reateCapture(VIDEO);
canvas.position(600,200)
posenet = ml5.poseNet(video, ModelLoaded);
posenet.on('pose', gotPose());
}
function draw(){

}
function ModelLoaded(){
    console.log("model loaded");
}
function gotPose(results){
    if(results.length>0){
        lx = results.pose.leftWrist.x;
        rx = results.pose.rightWrist.x;
        size = floor(lx-rx);
        console.log(size)
    }
}

function draw(){
    background("white");
    fill("yellow");
    stroke("black");
}