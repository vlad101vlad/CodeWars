// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
//
// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(givenString) {
    givenString = givenString.split(/[-_]+/);
    firstPart = givenString[0];
    secondPart = givenString.splice(1, givenString.length);


    secondPart = secondPart.map(substring =>
        substring.charAt(0).toUpperCase() + substring.split('').splice(1, substring.length).join('')
    ).join('');
    return firstPart.concat(secondPart)
}

console.log(toCamelCase("the_stealth_warrior"));