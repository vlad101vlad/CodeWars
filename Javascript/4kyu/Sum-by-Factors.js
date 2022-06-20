// Given an array of positive or negative integers
//
// I= [i1,..,in]
//
// you have to produce a sorted array P of the form
//
//     [ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]
//
// P will be sorted by increasing order of the prime numbers. The final result has to be given as a string in Java, C#, C, C++ and as an array of arrays in other languages.
//
//     Example:
// I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]
// [2, 3, 5] is the list of all prime factors of the elements of I, hence the result.
//
//     Notes:
//
// It can happen that a sum is 0 if some numbers are negative!
//     Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, the sum of the numbers for which 5 is a factor is 0 so we have [5, 0] in the result amongst others.
//
//     In Fortran -
//    as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

function isPrime(someNumber) {
    if (someNumber === 2) {
        return true;
    }
    if(someNumber % 2 ===0) {
        return false;
    }
    for (i = 3; i * i <= someNumber; i += 2) {
        if (someNumber % i === 0) {
            return false;
        }
    }
    return true;
}

function sumOfDivided(lst) {
    //your code
    aux = lst.slice();
    result = []
    maximum = Math.max(...aux.map(value => Math.abs(value)))

    for (k = 2; k < maximum; k++) {
        if (isPrime(k)) {
            partialList = [k, 0];
            wasPushed = false;
            lst.forEach(value => {
                if (value % k === 0) {
                    wasPushed = true;
                    partialList[1] += value;
                }
            });
            if (wasPushed) {
                result.push(partialList);
            }
        }
    }
    return result;
}

console.log(sumOfDivided([15, 21, 24, 30, 45]));