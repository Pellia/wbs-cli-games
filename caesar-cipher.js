// Functions
// Get User Input
function getUserInput() {
    const userInput = process.argv.slice(2);
    checkInput(userInput);

    return [userInput.slice(0, -1).join(" ").toLowerCase(), parseInt(userInput[userInput.length - 1])];
}

// Check User Input for Errors
function checkInput(userInput) {
    if (userInput.length === 0) {
        console.error("ERROR: No Input given! Please enter a sentence and a number to encrypt.");
        process.exit();
    } else if (userInput.length < 2) {
        console.error("ERROR: Only 1 input given! Please enter a sentence and a number to encrypt.");
        process.exit();
    } else if (isNaN(userInput[userInput.length - 1])) {
        console.error("ERROR: Please Enter a number as the last input!");
        process.exit();
    }
}

// Encrypt Message
function encryptMsg(message, shift) {
    let msg = "";
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    for (let i = 0; i < message.length; i++) {
        if (message[i] === " ") {
            msg = msg + " ";
            continue;
        }
        const currentIndex = alphabet.indexOf(message[i]);
        const newIndex = (currentIndex + shift) % 26;
        msg = msg + alphabet[newIndex];
    }
    return msg;
}

// User Input
const userInput = getUserInput();

// Encrypt
const secretMsg = encryptMsg(userInput[0], userInput[1]);

// // Log Result
console.log(secretMsg);
