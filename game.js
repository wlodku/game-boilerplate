import { Square } from "./square.js";

const canvas = document.getElementById('game');
canvas.width = 1000;
canvas.height = 1000;

const c = canvas.getContext('2d');
const s = new Square();

//logika sterująca wszystkimi obiektami w grze
function update() {
    s.update();
}

//przerysowujemy całe płótno
function draw() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    s.draw(c);
}