'use strict'

function makeFibonacciFunction (num) {
    
    let a = 1, b = 1;

    for (let i = 3; i <= num; i++) {
    let c = a + b;
    a = b;
    b = c;
    }

    return b;

}

console.log (makeFibonacciFunction (1));
console.log (makeFibonacciFunction (2));
console.log (makeFibonacciFunction (3));
console.log (makeFibonacciFunction (4));
console.log (makeFibonacciFunction (5));
console.log (makeFibonacciFunction (6));
console.log (makeFibonacciFunction (7));
console.log (makeFibonacciFunction (8));
console.log (makeFibonacciFunction (9));
console.log (makeFibonacciFunction (10));
