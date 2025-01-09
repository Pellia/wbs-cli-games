// Functions
function getUserInput() {
    return process.argv[2].split(" ");
}

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
