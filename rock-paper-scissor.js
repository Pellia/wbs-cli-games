// Available Moves
const move = ["rock", "paper", "scissors"];

// Functions
function getUserMove() {
    const userMove = process.argv[2];
    const extraInput = process.argv[3];
    checkInput(userMove, extraInput);

    return userMove.toLowerCase();
}

function checkInput(userMove, extraInput) {
    if (!userMove) {
        console.error("ERROR: No Move picked! Please pick one of the following moves: Rock, Paper or Scissors!");
        process.exit();
    } else if (!move.includes(userMove)) {
        console.error("ERROR: Please pick one of the following moves: Rock, Paper or Scissors!");
        process.exit();
    } else if (extraInput) {
        console.error("ERROR: Please only put one parameter as an input!");
        process.exit();
    }
}

function getComputerMove() {
    return move[Math.floor(Math.random() * move.length)];
}

function compareMoves(userMove, computerMove) {
    if ((userMove === "rock" && computerMove === "scissors") || (userMove === "paper" && computerMove === "rock") || (userMove === "scissors" && computerMove === "paper")) {
        return "You win!";
    } else if (userMove === computerMove) {
        return "It's a tie!";
    } else {
        return "Computer wins!";
    }
}

// User and Computer Move
const userMove = getUserMove();
const computerMove = getComputerMove();

// Compare
const result = compareMoves(userMove, computerMove);

// Result
console.log(`You chose ${userMove}. Computer chose ${computerMove}. ${result}`);
