var letters = [
    "a","b","c","d","e", "f", "g", "h", "i", "j", "k" ,"l", "m", "n", "o",
    "p","q","r","s","t","u","v","w","x","y","z"
];

var userInputs =[];

var magicLet = letters[Math.floor(Math.random()*letters.length)];

var wins=0;
var losses=0;
var guesses = 12;
var html = ""; 
var gsf=[];

function reset(){
    guesses = 12;
    gsf= [];
    document.querySelector("#gLeft").innerHTML = guesses;
    document.querySelector("#uGuess").innerHTML = gsf; 
    magicLet = letters[Math.floor(Math.random()*letters.length)];
}

document.onkeyup=function(event){
    var input = event.key;
    

    if(input.toLowerCase() === magicLet){
        reset();
        alert("You Guessed it!");
        alert("Guesses Left Replenished.")
        wins++;
        document.querySelector("#wins").innerHTML = wins;


    }
    
    else{
        alert("Incorrect");
        losses++;
        console.log(magicLet);

        if(guesses == 0)
        {
            alert("You ran out of guesses. You Lose. The letter to guess was : "+magicLet);
            alert("Resetting...");
            wins = 0 ;
            document.querySelector("#wins").innerHTML = wins;
            losses = 0;
            document.querySelector("#losses").innerHTML = losses;
            reset();
        }
        else{
       
        document.querySelector("#losses").innerHTML = losses;
        guesses--;
        document.querySelector("#gLeft").innerHTML = guesses;

        gsf.push(input);    console.log(gsf); 
        var html = gsf;
        
        document.querySelector("#uGuess").innerHTML = html;    }}

    
        //document.querySelector("#uGuess").innerHTML = input;

}