function preload()
{

}
function setup()
{
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotposes)
}
function draw()
{
image(video,0,0,400,400);
}
function take_snapshot()
{
    save("my_image.png");
}
function gotposes(results)
{
    if(results.length>0)
    {
        console.log(results);
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
    }
}
function modelLoaded()
{
    console.log("model is loaded");
}