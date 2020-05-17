const userScore = 0;
const computerScore = 0;


// Catching the dom 
const computerScore_span = document.getElementById("comp-score");
const userScore_span = document.getElementById("user-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// ----------------------------------------------------------
function getComputerChoice(){
    //getComputerChoice is returning a random computer choice
    choices = ["r", "p" , "s"];
    let randomIndex = Math.floor(Math.random() * 3); //produces a random number between 0 and 3(excluding)
    return choices[randomIndex];    
}

getComputerChoice();
function game(userChoice){
    const computerChoice = getComputerChoice();
    console.log("User choice : "+userChoice);
    console.log("Computer choice : "+computerChoice);
    switch(userChoice+computerChoice){
        //cases in which the user wins
        case "rs":
        case "pr":
        case "sp":
                    win();
                    break;
        //cases in which the computer wins
        case "sr":
        case "rp":
        case "ps":
                    lose();
                    break;
        //draw cases
        case "rr":
        case "pp":
        case "ss":
                    draw();
                    break;
    }
}

function main(){
    rock_div.addEventListener('click', function () {
        game("r");
    })

    paper_div.addEventListener('click', function () {
        game("p");
    })

    scissors_div.addEventListener('click', function () {
        game("s");  
    })
}

main();
