'use strict';

function factorial(number) {
  if (number === 1 || number === 0) {
    return 1;
  }
  return factorial(number - 1) * number;
}

console.log(factorial(5));
