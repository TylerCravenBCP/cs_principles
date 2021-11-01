// // global variables
// let canvas;
// let ctx;
// let oneSquare;
// let twoSquare;

// function init(){
//     canvas = document.createElement("canvas");
//     ctx = canvas.getContext('2d');
//     console.log("game initialized");
//     document.body.appendChild(canvas);
//     gameLoop();
// }

// function draw(){
//     //assign values here
// canvas = document.createElement("canvas");
// ctx =canvas.getContext('2d');
// document.body.appendChild(canvas);
//     // Using the CanvasRenderingContext2D we have access to draw and fill commands
//     // creates a variable called canvas that holds the HTML document element <canvas></canvas>
//     ctx.fillStyle = 'rgba(0, 0, 200, .4)';
//     ctx.fillRect(10, 100, 500, 50);
//     ctx.fillStyle = 'rgba(0, 0, 200, .2)';
//     ctx.fillRect(10, 10, 500, 50);
//     ctx.fillStyle = 'rgb(0, 0, 200)';
//     ctx.fillRect(10, 90, 10, 10);
//     ctx.fillStyle = 'rgb(0, 0, 200, .6)';
//     ctx.fillRect(160, 80, 40, 20);
//     ctx.fillStyle = 'rgb(0, 0, 200, .6)';
//     ctx.fillRect(70, 80, 40, 20);
//     ctx.fillStyle = 'rgb(0, 0, 200, .6)';
//     ctx.fillRect(250, 80, 40, 20);
// }

// let oneSquare = new Square(10, 10, 50, 50, 'rgb(200, 100, 200)');
// let twoSquare = new Square(60, 60, 50, 50, 'rgb(200, 200, 0)');

// function draw(){
//     ctx.clearRect(0,0, canvascanvas.width, canvas.height);
//     oneSquare.draw();
//     twoSquare.draw();
// }

// // // the canvas allows us to draw things on the HTML document page
// // // check out the MDN reference here for more info https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
// // let canvas = document.createElement("canvas");
// // // the CanvasRenderingContext2D interface, part of the Canvas API, allows us to draw
// // // You can use it to create shapes, text, images, and other objects.
// // // here we assign the context to ctx, which is a shorthand way of accessing commands
// // let ctx = canvas.getContext('2d');
// // // Here we append the body of the HTML document, which adds the canvas to the document body
// // document.body.appendChild(canvas);


// global variables
let canvas;
let ctx;
let WIDTH = 600;
let HEIGHT = 400;

// here we use init (short for initialize) to setup the canvas and context
// this function will be called in the HTML document in body onload = ""
// we also append the body with a new canvas element
//Initializing the canvas for creating the squares
function init() {
    canvas = document.createElement("canvas");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    ctx = canvas.getContext('2d');
    console.log("game initialized");
    document.body.appendChild(canvas);
    gameLoop();
}



// here we have a big leap!
// We are using the window.requestAnimationFrame() 
// .requestAnimationFrame() is a method (likg a function attached to an object)
// It tells the browser that you wish to animate
// It asks the browser to call a specific function, in our case gameLoop
// It uses this function to 'repaint'
// In JS this called a callback, where a function passes an argument to another function
class Square{
    //defining square 
    constructor(id, x, y, w, h, color){
        this.id = id;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        this.speed = 1;
        }
        //updating the position of the squares
        update(){
            if (this.x){
                
            }
            this.x += this.speed;
        };
        draw(){
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.w, this.h);
        };
    }

// instantiations... give a name to a shape and create its dimensions and color
let oneSquare = new Square("Bob", 10, 10, 50, 50, 'rgb(200, 100, 200)');
let twoSquare = new Square("Chuck", 60, 60, 100, 100, 'rgb(200, 200, 0)');

//Moving some
let someArray = [oneSquare, twoSquare];
for (i in someArray){
    console.log(someArray[i]);
}
for (i of someArray){
    console.log(i);
}

function update(){
    oneSquare.update();
}
// we now have just the drawing commands in the function draw
function draw(){
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    oneSquare.draw();
    twoSquare.draw();
}

// MDN reference https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
//Moving the square by using the functions defined above
let gameLoop = function () {
    // console.log('the game loop is alive! now comment this out before it eats up memory...')
    update();
    draw();
    window.requestAnimationFrame(gameLoop);
}