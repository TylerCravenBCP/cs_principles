// global variables
let canvas;
let ctx;
let WIDTH = 1408;
let HEIGHT = 576;
let TILESIZE = 64;
let allSprites = [];
let walls = [];

//Getting movement commands from user
let keysDown = {};
let keysUp = {};

//Representation of array that will appear on the actual site
let gamePlan = `
......................
..#................#..
..#................#..
..#................#..
..#........#####...#..
..#####............#..
......#............#..
......##############..
......................`;

//Boolean asks if key is pressed
addEventListener("keydown", function (event){
    keysDown[event.key] = true;
    console.log("key down is " + keysDown[event.key]);
}, false);
//Boolean asks if key returns to normal position
addEventListener("keyup", function (event){
    keysUp[event.key] = true;
    delete keysDown[event.key];
}, false);

//Setting up the canvas
//Reference on the html code
function init(){
    canvas = document.createElement("canvas");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    ctx = canvas.getContext('2d');
    console.log("game initialized");
    document.body.appendChild(canvas);
    gameLoop();
}

//Defining the Sprites
class Sprite{
    constructor(x, y, w, h, color){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        allSprites.push(this);
    }
    get type(){
        return "sprite";
    }
    //Sprites multiply into new sprites
    create(x, y, w, h, color){
        return new Sprite(x, y, w, h, color);
    }
    //Draw the sprites based on the description above
    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    };
}

//Defining the Player
class Player extends Sprite{
    constructor(x, y, speed, w, h, color, hitpoints){
        super(x, y, w, h, color);
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.w = w;
        this.h = h;
        this.color = color;
        this.hitpoints = hitpoints;
        console.log(this.hitpoints);
    }
    //Collision rules
    collideWith(obj){
        if (this.x + this.w > obj.x &&
            this.x < obj.x + obj.w &&
            this.y + this.h > obj.y &&
            this.y < obj.y + obj.h
        ) {
            console.log(this.type + ' collides with ' + obj.type);
            return true;
        }
    }
    get type(){
        return "player";
    }
    //Getting input from the user about which direction to move
    input(){
        //If w is pressed, player moves up
        if ('w' in keysDown){
            this.dy = -1;
            console.log("dy is: " + this.dy)
            this.y -= this.speed;
        }
        //If a is pressed, player moves left
        if ('a' in keysDown){
            this.dx = -1;
            console.log("dx is: " + this.dx)
            this.x -= this.speed;
        }
        //If s is pressed, player moves down
        if ('s' in keysDown){
            this.dy = 1
            console.log("dy is: " + this.dy)
            this.y += this.speed;
        }
        //If d is pressed, player moves right
        if ('d' in keysDown){
            this.dx = 1;
            console.log("dx is: " + this.dx)
            this.x += this.speed;
        }
    }
    //Defining the boundaries of the site
    update(){
        this.input();
        //this.y += Math.random()*5*this.speed;
        console.log(this.x);
        //Player cant move past x=1408
        if (this.x + this.w > WIDTH){
            this.x <= WIDTH - this.w;
        }
        //Player cant move past x=0
        if (this.x <= 0){
            this.x = 0;
        }
        //Player cant move past y=0
        if (this.y <= 0){
            this.y = 0;
        }
        //Player cant move past y=576
        if (this.y + this.h >= HEIGHT){
            this.y = HEIGHT - this.y;
        }
    };
}

//Defining Enemies
class Enemy extends Player{
    constructor(x, y, speed, w, h, color, hitpoints){
        super(x, y, speed, w, h, color, hitpoints);
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.w = w;
        this.h = h;
        this.color = color;
        this.hitpoints = hitpoints;
        // console.log(this.hitpoints);
    }
    get type(){
        return "enemy";
    }
}

//Assigning the Enemy as "badguy"
let badguy = new Enemy();
console.log("here's the example of a sub-sub class " + badguy.type);
console.log("badguy stats " + badguy.speed);

//Defining Walls
class Wall extends Sprite{
    constructor(x, y, w, h, color){
        super(x, y, w, h, color);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
    }
    create(x, y, w, h, color){
        return new Wall(x, y, w, h, color);
    }
    get type(){
        return "wall";
    }
}

//In the grid above, periods represent empty space, hashtags represent walls
const levelChars = {
    ".": "empty",
    "#": Wall,
};

//Creating the grid above
function makeGrid(plan, width){
    let newGrid = [];
    let newRow = [];
    for (i of plan){
        if (i != "\n"){
            newRow.push(i);
        }
        if (newRow.length % width == 0 && newRow.length != 0){
            newGrid.push(newRow);
            newRow = [];
        }
    }
    return newGrid;
}

//Inspection tab says the following
console.log("here's the grid...\n" + makeGrid(gamePlan, 22));

function readLevel(grid){
    let startActors = [];
    //Nestled loop
    for (y in grid){
        for (x in grid[y]){
            let ch = grid[y][x];
            if (ch != "\n"){
                let type = levelChars[ch];
                if (typeof type == "string"){
                    startActors.push(type);
                }else{
                    let t = new type;
                    startActors.push(t.create(x * TILESIZE, y * TILESIZE, TILESIZE, TILESIZE, 'blue'))
                }
            }
        }
    }
    return startActors;
}

//Defining levels
let currentLevel = readLevel(makeGrid(gamePlan, 22))
console.log('current level');
console.log(currentLevel);

//Instantiating player and a few unique sprites with their associated properties
let player1 = new Player(WIDTH / 2, HEIGHT / 2, 100, TILESIZE, TILESIZE, 'rgb(0, 200, 200)', 100);
// let oneSquare = new Square("Bob", 10, 10, 1, 50, 50, 'rgb(200, 100, 200)');
// let twoSquare = new Square("Chuck", 60, 60, 5, 100, 100, 'rgb(200, 200, 0)');
// let threeSquare = new Square("Bill", 70, 70, 3, 25, 25, 'rgb(100, 100, 222)');

console.log(allSprites);
console.log(walls);

//Collisions (although very glitchy) now work
function update(){
    for (i of allSprites){
        if (i.type == "wall"){
            // console.log(i)
            if (player1.collideWith(i)){
                //If you collide from the left, you cant pass through the wall
                if (player1.dx == 1){
                    //this.input(); //This makes player FREEZE, unable to move at all
                    player1.x = i.x - player1.w;
                }
                //If you collide from the right, you cant pass through the wall
                else if (player1.dx == -1){
                    //this.input(); //This makes player FREEZE, unable to move at all
                    player1.x = i.x + player1.w;
                }
                //If you collide from above, you cant pass through the wall
                else if (player1.dx == 1){
                    //this.input(); //This makes player FREEZE, unable to move at all
                    player1.y = i.y - player1.h;
                }
                //If you collide from below, you cant pass through the wall
                else if (player1.dx == -1){
                    //this.input(); //This makes player FREEZE, unable to move at all
                    player1.y = i.y + player1.h;
                }
                // console.log("player collided with walls")
                console.log("player1 dx is: " + player1.dx);
            }
        }
    }
    //Player one cant pass through any walls
    player1.update();
    // oneSquare.update();
    // twoSquare.update();
}
//Drawing sprites
function draw(){
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    for (i of allSprites){
        // console.log(i);
        i.draw();
    }
}
// MDN reference https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
//Defining the game loop
let gameLoop = function(){
    // console.log('the game loop is alive! now comment this out before it eats up memory...')
    update();
    draw();
    window.requestAnimationFrame(gameLoop);
}