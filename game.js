import { Square } from "./square.js";

const canvas = document.getElementById('game');
canvas.width = 1000;
canvas.height = 1000;

const c = canvas.getContext('2d');
const s = new Square();

//Main logic
function update() {
    s.update();
}

//Redraw canvas
function draw() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    s.draw(c);
}

let secondsPassed;
let oldTimeStamp;
let fps;

//Main game loop
function mainLoop(timeStamp) {        
    secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp;

    // Calculate fps
    fps = Math.round(1 / secondsPassed);
    console.log("FPS: " + fps);

    update();
    draw(c);
    requestAnimationFrame(mainLoop);
}

requestAnimationFrame(mainLoop);