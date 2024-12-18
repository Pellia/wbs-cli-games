// Functions
function getUserMove() {
    return process.argv[2];
}

function getComputerMove() {
    const move = ["rock", "paper", "scissor"];
    return move[Math.floor(Math.random() * 3)];
}

// User and Computer Move
const userMove = getUserMove();
const computerMove = getComputerMove();

// Compare
if (userMove === computerMove) {
    console.log("It's a tie");
} else if (userMove === "rock" && computerMove === "scissors") {
    console.log("Player wins!");
} else if (userMove === "paper" && computerMove === "rock") {
    console.log("Player wins!");
} else if (userMove === "scissors" && computerMove === "paper") {
    console.log("Player wins!");
} else {
    console.log("Computer wins!");
}
