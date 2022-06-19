// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//
// Example: (Input --> Output)
//
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str) {
    str = str.toLowerCase();
    stringCopy = str;
    stringCopy = stringCopy.split("");

    validIsogram = true;
    str.split("").forEach(character => {
        if (isLetter(character)) {
            result = stringCopy.filter(someCharacter => someCharacter === character);
            if (result.length > 1) {
                validIsogram = false;
            }
        }
    })
    return validIsogram;
}

function isLetter(someLetter) {
    return someLetter.toLowerCase() != someLetter.toUpperCase();
}