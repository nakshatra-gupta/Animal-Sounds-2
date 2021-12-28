function startClassifier()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/HodkpC6Yh/model.json", model_loaded);
}
function model_loaded()
{
    classifier.classify(gotResult);
}
function gotResult(error,result)
{
    console.log(gotResult)
    if(error)
    {
    
    }
    else
    {

    }
}