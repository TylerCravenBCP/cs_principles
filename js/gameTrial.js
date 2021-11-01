// global variables
let canvas;
let ctx;

function init(){
    canvas = document.createElement("canvas");
    ctx = canvas.getContext('2d');
    console.log("game initialized");
    document.body.appendChild(canvas);
    gameLoop();
}

function draw(){
    //assign values here
canvas = document.createElement("canvas");
ctx =canvas.getContext('2d');
document.body.appendChild(canvas);
    // Using the CanvasRenderingContext2D we have access to draw and fill commands// // creates a variable called canvas that holds the HTML document element <canvas></canvas>
    // ctx.fillStyle = 'rgb(200, 0, 0)';
    // ctx.fillRect(10, 10, 280, 10);
    // ctx.fillStyle = 'rgb(200, 0, 0)';
    // ctx.fillRect(10, 10, 10, 300);
    // ctx.fillStyle = 'rgb(200, 0, 0)';
    // ctx.fillRect(10, 30, 280, 10);
    // ctx.fillStyle = 'rgb(200, 0, 0)';
    // ctx.fillRect(10, 50, 280, 10);
    // ctx.fillStyle = 'rgb(200, 0, 0)';
    // ctx.fillRect(10, 70, 280, 10);
    // ctx.fillStyle = 'rgb(200, 0, 0)';
    // ctx.fillRect(10, 90, 280, 10);
    // ctx.fillStyle = 'rgb(200, 0, 0)';
    // ctx.fillRect(10, 110, 280, 10);
    // ctx.fillStyle = 'rgb(200, 0, 0)';
    // ctx.fillRect(10, 130, 280, 10);
    // ctx.fillStyle = 'rgb(200, 0, 0)';
    // ctx.fillRect(10, 150, 280, 10);
    // ctx.fillStyle = 'rgb(0, 0, 200)';
    // ctx.fillRect(290, 10, 10, 300);
    // ctx.fillStyle = 'rgb(0, 0, 200)';
    // ctx.fillRect(20, 20, 280, 10);
    // ctx.fillStyle = 'rgb(0, 0, 200)';
    // ctx.fillRect(20, 40, 280, 10);
    // ctx.fillStyle = 'rgb(0, 0, 200)';
    // ctx.fillRect(20, 60, 280, 10);
    // ctx.fillStyle = 'rgb(0, 0, 200)';
    // ctx.fillRect(20, 80, 280, 10);
    // ctx.fillStyle = 'rgb(0, 0, 200)';
    // ctx.fillRect(20, 100, 280, 10);
    // ctx.fillStyle = 'rgb(0, 0, 200)';
    // ctx.fillRect(20, 120, 280, 10);
    // ctx.fillStyle = 'rgb(0, 0, 200)';
    // ctx.fillRect(20, 140, 280, 10);
    // //
    ctx.fillStyle = 'rgba(0, 0, 200, .4)';
    ctx.fillRect(10, 100, 500, 50);
    ctx.fillStyle = 'rgba(0, 0, 200, .2)';
    ctx.fillRect(10, 10, 500, 50);
    ctx.fillStyle = 'rgb(0, 0, 200)';
    ctx.fillRect(10, 90, 10, 10);
    ctx.fillStyle = 'rgb(0, 0, 200, .6)';
    ctx.fillRect(160, 80, 40, 20);
    ctx.fillStyle = 'rgb(0, 0, 200, .6)';
    ctx.fillRect(70, 80, 40, 20);
    ctx.fillStyle = 'rgb(0, 0, 200, .6)';
    ctx.fillRect(250, 80, 40, 20);
}

// // the canvas allows us to draw things on the HTML document page
// // check out the MDN reference here for more info https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
// let canvas = document.createElement("canvas");
// // the CanvasRenderingContext2D interface, part of the Canvas API, allows us to draw
// // You can use it to create shapes, text, images, and other objects.
// // here we assign the context to ctx, which is a shorthand way of accessing commands
// let ctx = canvas.getContext('2d');
// // Here we append the body of the HTML document, which adds the canvas to the document body
// document.body.appendChild(canvas);