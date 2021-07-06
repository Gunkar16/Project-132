function preload(){

}

function setup(){
    canvas = createCanvas(500,300);
    canvas.center();

    ObjectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects"
}

function modelLoaded(){
    console.log("Model Loaded");
    status = true;
    ObjectDetector.detect(Img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        Objects = results;
        console.log(Objects);
    }
}
