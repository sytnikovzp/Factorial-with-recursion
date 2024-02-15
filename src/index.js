'use strict';

function factorial(number = 0) {
  if (number === 1 || number === 0 || number <= 0) {
    return 1;
  }
  return factorial(number - 1) * number;
}

console.log(factorial());
