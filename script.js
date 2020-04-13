// window dimensions
const WIDTH = window.innerWidth, 
      HEIGHT = window.innerHeight;

var starCount = 100;
var maxStarRadius = 10;
var maxStarRate = 10;

var starDis, starRadius, starAngle, starRate;

window.onload = function(e) {

    // canvas setup
    var canvas = document.getElementById("canvas");
    var c = canvas.getContext("2d");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    // initial setup
    init(c);
    
    // main logic loop
    var loop = function() {
        update();
        render(c);
        window.requestAnimationFrame(loop, canvas);
    }
    window.requestAnimationFrame(loop, canvas);
}

function init(c) {

    // initialize star data
    starDis = new Array(starCount);
    starRadius = new Array(starRadius);
    starRate = new Array(starCount);
    starAngle = new Array(starCount);

    // initialize stars
    for (var i = 0; i < starCount; i++) {
        resetStar(i);
    }

}

function update() {

    for (var i = 0; i < starCount; i++) {

        starDis[i] += starRate[i];
        starRadius[i] += starRate[i] / 2;

        if (starDis > WIDTH) {
            resetStar(i);
        }
    } 

}

function render(c) {

    c.fillStyle = "black";
    c.fillRect(0, 0, WIDTH, HEIGHT);
    c.fillStyle = "white";

    for (var i = 0; i < starCount; i++) {
        c.beginPath();
        c.arc(
            WIDTH / 2 + Math.cos(starAngle[i]) * starDis[i],
            HEIGHT / 2 + Math.sin(starAngle[i]) * starDis[i],
            starRadius[i],
            0,
            Math.PI * 2
        );
        c.closePath();
        c.fill();
    }

}

function resetStar(i) {

    starDis[i] = Math.random() * WIDTH;
    starRadius[i] = Math.random() * maxStarRadius;
    starAngle[i] = Math.random() * Math.PI * 2;
    starRate[i] = Math.random() * starRate;

}
