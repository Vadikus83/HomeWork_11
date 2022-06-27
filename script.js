'use strict'

let numberContainer = document.querySelector('.fibonacci');
let buttonStart = document.querySelector('#start');

function makeFibonacciFunction() {
    let a = 0;
    let nextNumber = function() {
        let b = 0;
        let c = 1;
        for (let i = 1; i <= a; i++) {
            let x = b + c;
            b = c;
            c = x;
        }
        a += 1;
        
        let spanElem = document.createElement('span');
        spanElem.innerHTML +=  c;
        numberContainer.appendChild(spanElem);
        
        return ;
    }
    return nextNumber;
}

const fibonacci = makeFibonacciFunction();

buttonStart.addEventListener('click', fibonacci);


