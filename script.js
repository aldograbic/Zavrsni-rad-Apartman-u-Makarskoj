function napraviPrvo () {
    var x = document.getElementById("mojCanvas");
    canvas = x.getContext("2d");
    canvas.font = "bold 10px sans-serif";
    canvas.rotate(-25);
    canvas.strokeRect (200,50,100,200);
    canvas.strokeRect (450,100,50,200);
    canvas.strokeRect (590,-70,50,200);
    canvas.strokeRect (670,100,100,200);
    

    canvas.fillText("MAKARSKA", 220, 150);
    canvas.fillText("HVAR", 460, 200);
    canvas.fillText("OREBIĆ", 595, 25);
    canvas.fillText("KORČULA", 695, 200);
    
    canvas.beginPath();
    canvas.moveTo(300, 150);
    canvas.lineTo(400,70);
    canvas.lineTo(500,70);
    canvas.lineTo(550,135);
    canvas.lineTo(550,175);
    canvas.lineTo(575,190);
    canvas.lineTo(630,190);
    canvas.lineTo(650,150);
    canvas.lineTo(660,125);
    canvas.lineTo(670,120);
    canvas.lineWidth = 2;
    canvas.strokeStyle = "#6F6F6F";
    canvas.stroke();

}
window.addEventListener("load", napraviPrvo, false)
