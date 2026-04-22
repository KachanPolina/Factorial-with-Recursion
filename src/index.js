'use strict';
function getFactorial(number) {
    if(number < 0 || !Number.isFinite(number)) return NaN;
    if(number <= 1) return 1;
    return number * getFactorial(number - 1);
}

console.log(getFactorial(undefined));