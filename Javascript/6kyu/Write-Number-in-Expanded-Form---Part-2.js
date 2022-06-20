// You will be given a number and you will need to return it as a string in expanded form :
//
//     expanded form illustration
//
// For example:
//
// expandedForm(1.24); // should return '1 + 2/10 + 4/100'
// expandedForm(7.304); // should return '7 + 3/10 + 4/1000'
// expandedForm(0.04); // should return '4/100'
// expandedForm(807.304); // Should return '800 + 7 + 3/10 + 4/1000'

function expandedForm(num) {
    result = num.toString().split(".");
    let rightToDecimal = [];
    if (result.length > 1) {
        rightToDecimal = result[1];
        rightToDecimal = rightToDecimal.split("")
            .map((value, index, array) => `${value}/${Math.pow(10, index + 1)}`)
            .filter(value => {
                const regex = /^0\/*/;
                return !regex.test(value);
            });
    }
    const leftToDecimal = result[0].split("").reverse()
        .map((value, index, array) => Math.pow(10, index) * value)
        .filter(value => value > 0)
        .reverse();

    return leftToDecimal.concat(rightToDecimal).join(" + ");
}

console.log(expandedForm(807.304));