// Vowel
const vowel = ["a", "e", "i", "o", "u"];

// User Input
const strArr = process.argv[2].split(" ");

// Convert Arr
// console.log(vowel.includes(strArr[0][1].toLowerCase()));
const pigArr = strArr.map((str) => {
    if (vowel.includes(str[0].toLowerCase())) {
        return str + "way";
    } else if (!vowel.includes(str[0].toLowerCase()) && !vowel.includes(str[1].toLowerCase())) {
        return str.slice[2] + str.slice[(0, 2)] + "ay";
    } else {
        return str.slice[2];
    }
});

console.log(pigArr.join(" "));
// Log Result
