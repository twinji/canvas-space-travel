// window dimensions
const WIDTH = window.innerWidth, 
      HEIGHT = window.innerHeight;

var starCount = 100;

var starDis, starSize;

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

    starDis = new Array(starCount);
    starSize = new Array(starSize);
    for (var i = 0; i < starCount; i++) {
        starDis[i] = Math.random() * WIDTH;
        starSize[i] = Math.random() * WIDTH;
    }

}

function update() {}

function render(c) {}
