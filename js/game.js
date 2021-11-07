// global variables
let canvas;
let ctx;
let WIDTH = 600;
let HEIGHT = 400;

let keysDown = {};
let keysUp = {};

addEventsListener("keydown", function (event){
    keysDown[EventSource.key] = true;
    console.log("key down is " + keysDown[event.key]);
    console.log(keysDown);
}, false);
addEventListener("keyup", function (event){
    keysUp[event.key] = true;
    delete keysDown[event.key];
    console.log(keysDown);
}, false);

function init() {
    canvas = document.createElement("canvas");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    ctx = canvas.getContext('2d');
    console.log("game initialized");
    document.body.appendChild(canvas);
    gameLoop();
}

class Square {
    constructor(id, x, y, speed, w, h, color){
        this.id = id;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.w = w;
        this.h = h;
        this.color = color;
    }
    update(){
        if (this.x >= WIDTH-this.w || this.x < 0){
            this.speed = -this.speed;
        }            
    };
    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    };
}

class Player extends Square{
    constructor(id, x, y, speed, w, h, color, hitpoints){
        super(id, x, y, speed, w, h, color, hitpoints);
        this.id = id;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.w = w;
        this.h = h;
        this.color = color;
        this.hitpoints = hitpoints;
        console.log(this.hitpoints);
        }
    update(){
        if (this.x >= WIDTH-this.w || this.x < 0){
            this.speed = -this.speed*1.5;
        }            
    };
    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    };
}

//Instantiations of different squares
let player1 = new Player("Me", WIDTH/2, HEIGHT/2, 1, 40, 40, 'rgb(100, 100, 100)', 100);
let oneSquare = new Square("Toby", 10, 10, 2, 50, 50, 'rgb(200, 100, 200)');
let twoSquare = new Square("Tiller", 60, 60, 2, 100, 100, 'rgb(200, 200, 0)');
let threeSquare = new Square("Talon", 70, 70, 2, 25, 25, 'rgb(100, 100, 222)');

let allSprites = [oneSquare, twoSquare, threeSquare, player1];

function update(){
    for (i of allSprites){
        i.update();
    }
}
// we now have just the drawing commands in the function draw
function draw() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    for (i of allSprites){
        i.draw();
    }
}

// MDN reference https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
let gameLoop = function () {
    // console.log('the game loop is alive! now comment this out before it eats up memory...')
    update();
    draw();
    window.requestAnimationFrame(gameLoop);
}