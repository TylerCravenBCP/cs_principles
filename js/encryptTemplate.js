//Creating an Index
let Letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//Defining eMsg
let eMsg = "secret message";
//Creating an Index with all of the characters shifted over
let EncryptedLetters = ["t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",];

    (content) => {
        //Creating and declaring displays
        document.getElementById("display1").innerHTML = content;
        document.getElementById("display2").innerHTML = eMsg;
        document.getElementById("display3").innerHTML = content;
        document.getElementById("display4").innerHTML = content;
    }
//New function that adds 5 ascii characters to the characters
function encrypt(){
    //For loop
    for (i = 0, n = input.length; i < n; i++) {
        //let val be the input given by the user
        let val = input.charCodeAt(i);
        //Adding 5 (ASCII) to each character
        val += 5;
        //Returning the message
        inputEncrypt = String.fromCharCode(val);
    }
    //Returning the encrypted message
    output("The encrypted message is...");
}
//New function that subtracts 5 ascii characters to the characters
function decrypt(){
    //For loop
    for (i = 0, n = input.length; i < n; i++) {
        //let val be the input given by the user
        let val = input.charCodeAt(i);
        //Subtracting 5 (ASCII) to each character
        val -= 5;
        //Returning the message
        inputEncrypt = String.fromCharCode(val);
    }
    //Returning the decrypted message
    output("The decrypted message is...");
}

function showEncryptionKey(){
    
    
}

// global variables go at the top
let Letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "\n"];
let encryptKey = ["t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "\n"];

// this is how you can push things into an array that is empty...
let myArr = [];
console.log("I just pushed something into this array " + myArr);

//Naming unique function
function computeScore(word){
    //let score = 0;
    //For loop acknowledging letter and acknowledging its replacement.
    for (i = 0, n = word.length; i < n; i++){
        console.log("letter is " + (Letters[i]));
        console.log("letter replacement is " + getencryptKey(Letters[i].toencryptKey()));
        string += getencryptKey(Letters[i].toencryptKey());
        console.log("final message here: " + string);
    }
    //We want a string of letters to be returned
    return string;
}

//Scoring "hello"
computeScore("hello");

function getInputValue() {
    // Selecting the input element and get its value 
    return document.getElementById("inputId").value;
    // Displaying the value
}

//New function
function doSomething(){
    let encryptedValue = encrypt(getInputValue())
    alert("Encrypted value is " + encryptedValue);
    output(encryptedValue);
}

let eMsg = "secret message";

//access element on page and alter it dynamically
function output(content){
    document.getElementById("display1").innerHTML = content;
    document.getElementById("display2").innerHTML = eMsg;
    document.getElementById("display3").innerHTML = "hello";
}


//Letting the word equal no characters
let currentWord = "";
//For loop adding encryption to current word
for (i = 0, n = word.length; i < n; i++){
    let Letters = encryptKey[i];
    currentWord = currentWord + encryptKey;
    
}

