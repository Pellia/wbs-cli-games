// Functions
function getUserInput() {
    return process.argv[2].toLowerCase();
}

function getUserShift() {
    return parseInt(process.argv[3]);
}

// User Input
const userInput = getUserInput();
const userShift = getUserShift();

// Encrypt
for (let i = 0; i < userInput.length; i++) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    if (userInput[i] === " ") {
        continue;
    }
    const currentIndex = alphabet.indexOf(userInput[i]);
    const newIndex = (currentIndex + userShift) % 26;
    userInput[i] = alphabet[newIndex];
}

// Log Result
console.log(userInput);
