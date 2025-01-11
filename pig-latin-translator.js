// Functions
// Get User Input
function getUserInput() {
    const userInput = process.argv.slice(2);
    checkInput(userInput);

    if (userInput.length > 1) {
        return userInput;
    } else {
        return process.argv[2].split(" ");
    }
}
// Check User Input for Errors
function checkInput(userInput) {
    if (userInput.length === 0) {
        console.error("ERROR: No Input given! Please enter a sentence to translate.");
        process.exit();
    }
}

// Translate User Input to Pig Latin
function translate(str) {
    const vowel = ["a", "e", "i", "o", "u"];
    if (!vowel.includes(str[0].toLowerCase()) && !vowel.includes(str[1].toLowerCase())) {
        return str.slice(2) + str.slice(0, 2) + "ay";
    } else if (!vowel.includes(str[0].toLowerCase())) {
        return str.slice(1) + str.slice(0, 1) + "ay";
    } else {
        return str + "way";
    }
}

// Check for letter case
function updateCase(str) {
    if (str[str.length - 3] === str[str.length - 3].toUpperCase() || str[str.length - 4] === str[str.length - 4].toUpperCase()) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
    } else {
        return str;
    }
}

// User Input
const strArr = getUserInput();

// Translate
const pigLatin = strArr.map((str) => updateCase(translate(str))).join(" ");

// Log Result
console.log(pigLatin);
