// Functions
function getUserInput() {
    return process.argv[2].toLowerCase();
}

function getUserShift() {
    return parseInt(process.argv[3]);
}

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
const userShift = getUserShift();

// Encrypt
const secretMsg = encryptMsg(userInput, userShift);

// Log Result
console.log(secretMsg);
