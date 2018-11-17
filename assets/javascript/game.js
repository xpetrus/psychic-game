var letters = [
    "a","b","c","d","e", "f", "g", "h", "i", "j", "k" ,"l", "m", "n", "o",
    "p","q","r","s","t","u","v","w","x","y","z"
];

var userInputs =[];

var magicLet = letters[Math.floor(Math.random()*letters.length)];

var wins=0;
var losses=0;


document.onkeyup=function(event){
    var input = event.key;

    if(input.toLowerCase() === magicLet){
        alert("You Win");
        wins++;
    }
    else{
        alert("Incorrect");
        losses++;
        console.log(magicLet);
    }




    //document.querySelector("#uGuess").innerHTML = input;



}