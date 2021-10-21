//console.log("this is coming from a separate file")
//let myVar = 5;
//console.log("my first console message");
//console.log(myVar);

// only javascript goes here NO HTML...
//Sets up the alert/popup notification
alert("Go BELLS!!!");
//Equivalent to printf function in C
console.log("this is coming from a separate file...")
//Let the variable equal 5
let myVar = 5;
//
console.log("my first console message");
console.log(myVar); 

// bool
//Equivalent of a for loop
let playing = true;
//Giving image dimensions
let width = 150;
let height = 150;
//Naming player 1, Tim
var player1 = "Tim";
//Naming player 2, Ralph
const player2 = "Ralph";
//Giving x/y coordinates
let x = 25;
let y = 25;

// for loops in js
for (i=0; i<10; i++){
    console.log(i);
}

function draw() {
    //Variable that allows code to look for element in the html document with an id of canvas
    var canvas = document.getElementById('canvas');
    //Asking, "If this works.../If true..."
    if (canvas.getContext) {
      //Canvas has an x and y axis - 2d
      var ctx = canvas.getContext('2d');
      //Coloring
      ctx.fillStyle = 'rgb(200, 0, 0)';
      //Creating shape
      ctx.fillRect(x, y, 50, 50);
      //Filling the chape with color
      ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
      //Changing shape dimensions
      ctx.fillRect(30, 30, width, height);
    }
  }

  draw();