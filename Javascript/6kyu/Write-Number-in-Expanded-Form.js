// You will be given a number and you will need to return it as a string in Expanded Form. For example:
//
//     expandedForm(12); // Should return '10 + 2'
//     expandedForm(42); // Should return '40 + 2'
//     expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
    // Your code here
    num = num.toString().split('');
    result = []
    power = 1;
    for (i = num.length - 1; i >= 0; i--) {
        const toBeAdded = Number(num[i]) * power;
        if (toBeAdded > 0) {
            result.push(toBeAdded);
        }
        power *= 10;
    }
    return result.reverse().join(" + ");
}

console.log(expandedForm(70304));