// User Move
const userMove = process.argv[2];

// Computer Move
const move = ["rock", "paper", "scissor"];
const computerMove = move[Math.floor(Math.random() * 3)];

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
