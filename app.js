let userScore = 0;
let computerScore = 0;


// Catching the dom 
const computerScore_span = document.getElementById("comp-score");
const userScore_span = document.getElementById("user-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// ----------------------------------------------------------

function getComputerChoice() {
    //getComputerChoice is returning a random computer choice
    choices = ["r", "p", "s"];
    let randomIndex = Math.floor(Math.random() * 3); //produces a random number between 0 and 3(excluding)
    return choices[randomIndex];
}

function convertToWord(letter) {
    if (letter === 'r')
        return "Rock";
    else if (letter === 'p')
        return "Paper";
    else
        return "Scissors";
}

function win(userC, compC) {
    /*
    userC = userChoice
    compC = computerChoice
    */

    const smallUser = "user".fontsize(3).sub();
    const smallComp = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userC);

    userScore++;
    userScore_span.innerHTML = userScore;

    result_div.innerHTML = `${convertToWord(userC)}${smallUser} beats ${convertToWord(compC)}${smallComp} You Win!`;
    userChoice_div.classList.add("green-glow");
    setTimeout(function () {
        userChoice_div.classList.remove("green-glow");
    }, 700);
}

function lose(userC, compC) {
    const smallUser = "user".fontsize(3).sub();
    const smallComp = "comp".fontsize(3).sub();
    const compChoice_div = document.getElementById(userC);

    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(compC)}${smallComp} beats ${convertToWord(userC)}${smallUser} You Lose!`;
    compChoice_div.classList.add("red-glow");
    setTimeout(function () {
        compChoice_div.classList.remove("red-glow");
    }, 700)
}

function draw() {
    result_div.innerHTML = "It's a Draw";
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    console.log("User choice : " + userChoice);
    console.log("Computer choice : " + computerChoice);
    switch (userChoice + computerChoice) {
        //cases in which the user wins
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        //cases in which the computer wins
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        //draw cases
        case "rr":
        case "pp":
        case "ss":
            draw();
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"))

    paper_div.addEventListener('click', () => game("p"))

    scissors_div.addEventListener('click', () => game("s"))
}

main();
