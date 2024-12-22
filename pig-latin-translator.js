// Vowel
const vowel = ["a", "e", "i", "o", "u"];

// User Input
const strArr = process.argv[2].split(" ");

// Convert Arr
const pigArr = strArr.map((str) => {
    if (vowel.includes(str[0].toLowerCase())) {
        return str + "way";
    } else if (!vowel.includes(str[0].toLowerCase()) && !vowel.includes(str[1].toLowerCase())) {
        if (str[0] === str[0].toUpperCase()) {
            return str.slice(2) + str.slice(0, 2) + "ay";
        } else {
            return str.slice(2) + str.slice(0, 2) + "ay";
        }
    } else {
        if (str[0] === str[0].toUpperCase()) {
            return str.slice(1, 2).toUpperCase() + (str.slice(2) + str.slice(0, 1)).toLowerCase() + "ay";
        } else {
            return str.slice(1) + str.slice(0, 1) + "ay";
        }
    }
});

console.log(pigArr.join(" "));
// Log Result
