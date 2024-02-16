

const userChoiceDisplay = document.getElementById ("user-choice");
const computerChoiceDisplay = document.getElementById ("computer-choice");
const resultDisplay = document.getElementById ("result");
const possibleChoices = document.querySelectorAll ("button");

let userchoice;
let computerChoice;
let result;

possibleChoices.forEach(possiblechoices => possiblechoices.addEventListener ('click', (e) => {
    userChoice = e.target.id 
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}));

function generateComputerChoice (){
    const randomNumber = Math.floor((Math.random() * possibleChoices.length) + 1);
    console.log (randomNumber);

    if (randomNumber === 1) {
        computerChoice = "Rock"
    }

    if (randomNumber === 2) {
        computerChoice = "Paper"
    }

    if (randomNumber === 3) {
        computerChoice = "Scissors"
    }
    computerChoiceDisplay.innerHTML = computerChoice;
};


function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a draw!"   
    }

    if (computerChoice === "Rock" && userChoice === "Paper") {
        result = "You lost!"   
    }

    if (computerChoice === "Rock" && userChoice === "Scissors") {
        result = "You lost!"   
    }

    if (computerChoice === "Paper" && userChoice === "Scissors") {
        result = "You won!"   
    }

    if (computerChoice === "Paper" && userChoice === "Rock") {
        result = "You won!"   
    }

    if (computerChoice === "Scissors" && userChoice === "Rock") {
        result = "You won!"   
    }

    if (computerChoice === "Scissors" && userChoice === "Paper") {
        result = "You lost!"   
    }

    resultDisplay.innerHTML = result;
 }

 

// function getResult() {
//    console.log("Hello, World!")
//  }
