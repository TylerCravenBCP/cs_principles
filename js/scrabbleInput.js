//Assigning point values to each letter of the alphabet
let POINTS = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10];
//Specifically naming letters of the alphabet
let Letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//Player 1's initial score = 0
let player1score = 0;
//Player 2's initial score = 0
let player2score = 0;

//Check if the letter is uppercase
//Unique function name and type
function isupper(str) {
  //Boolean - is the letter uppercase
  return str === str.toUpperCase();
}

//Check if the letter is lowercase
//Unique function name and type
function islower(str) {
  //Boolean - is the letter lowercase
  return str === str.toLowerCase();
}

//Get point values from the index of scores at the top
//Unique function name and type
function getPoints(letter){
  //Finds address of letter in index above
  let index = Letters.indexOf(letter);
  //Returning an integer
  return POINTS[index];
}

//Testing the scoring
console.log("testing point function " + getPoints("x"));
//Testing the index accuracy/proficency
console.log("testing index " + Letters.indexOf("c"));

//Unique function name and type
function add(x,y){
  //Allowing sum to be x + y
  let sum = x + y;
  //Allowing the string to be $ with the value of x+y
  let string = '$(sum)';
  //Determining how long the string is
  console.log(string.length);
  //Letting the user know what the sum is
  console.log("the sum is ", sum);
}
//Automattically assigning x and y the values 6 and 7
add(6,7);

//Unique function name and type
function compute_score(word){
  //Let the initial score = 0
  let score = 0;
  //Let the initial index address = 0
  let index = 0;
  //Opening for loop and naming variables
  for (i = 0, n = word.length; i < n; i++){
    //Calling on unique function asking if letter is lowercase
    // if (islower(word[i])){
    //   //Determines if letter is lowercase
    //   console.log(word[i] + " is lower case");
    // }
    // //Calling on unique function asking if letter is uppercase
    // if (isupper(word[i])){
    //   //Determines is letter is uppercase
    //   console.log(word[i] + " is upper case");
    // }
    //Naming the letter
    console.log("letter is " + (word[i]));
    //Telling user the score of the specific letter
    console.log("letter score is " + getPoints(word[i].toLowerCase()));
    //Determining the score of the letter
    score += getPoints(word[i].toLowerCase());
    //Telling user the score of all of the letters
    console.log("final score here " + score);
    //Calling on unique function giving a score to player
    score += getPoints(word[i]);
    //Determines score
    console.log("testing the score " + score);
  }
}

//Automatically submitting the word "Hello"
compute_score("Hello");
//Checking letters to see if they are in the index
//-1 = not in index, therefore, letters not in index must return FALSE
console.log("Testing index of something not in index" + -1 == Letters.indexOf('A'));

//Allowing the inputVal to be accessed on several functions
let inputVal = null;
//Unique function name and type
function getInputValue() {
  // Selecting the input element and get its value 
  return document.getElementById("inputId").value;
  // Displaying the value
  output();
}

function doSomething(){
  computeScore(getInputValue());
}

//Unique function name and type
function output(){
  //Returning a new output
  document.getElementById("output").value = inputVal;
}

//Unique function name and type
function Output(){
  //Returning a new output, not just "Scrabble"
  document.getElementById("output").value = "I  CAN CHANGE THINGS IN THE BROWSER";
}

output();