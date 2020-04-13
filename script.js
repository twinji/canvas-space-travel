// window dimensions
const WIDTH = window.innerWidth, 
      HEIGHT = window.innerHeight;

var starCount = 20000;

var starDis, 
    starRadius, 
    starAngle, 
    starRate,
    starAlpha,
    starMaxAlpha;

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
    starAlpha = new Array(starCount);
    starMaxAlpha = new Array(starCount);

    // initialize stars
    for (var i = 0; i < starCount; i++) {
        resetStar(i);
    }

}

function update() {

    for (var i = 0; i < starCount; i++) {
 
        starRadius[i] *= 1 + starRate[i] * .001;
        starDis[i] *= 1 + starRate[i];

        if (starAlpha[i] < starMaxAlpha[i]) {
            starAlpha[i] *= 1 + starRate[i] * .5;
        }

        if (starDis[i] > WIDTH) {
            resetStar(i);
        }
    }
}

function render(c) {

    c.globalAlpha = .4;
    c.fillStyle = "black";
    c.fillRect(0, 0, WIDTH, HEIGHT);
    c.fillStyle = "white";

    for (var i = 0; i < starCount; i++) {
        c.globalAlpha = starAlpha[i];
        c.beginPath();
        c.arc(
            WIDTH / 2 + Math.cos(starAngle[i]) * starDis[i],
            HEIGHT / 2 + Math.sin(starAngle[i]) * starDis[i],
            starRadius[i],
            .1,
            Math.PI * 2
        );
        c.closePath();
        c.fill();
        c.globalAlpha = 1;
    }

}

function resetStar(i) {

    starDis[i] = Math.random() * WIDTH;
    starRadius[i] = Math.random();
    starAngle[i] = Math.random() * Math.PI * 2;
    starRate[i] = Math.random() * .025;
    starAlpha[i] = .025;
    starMaxAlpha[i] = Math.random() * .95;
}
