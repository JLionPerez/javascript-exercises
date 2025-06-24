const add = function(x, y) {
  return x + y
};

const subtract = function(x, y) {
	return x - y
};

const sum = function(arr) {
  let sum = 0;

  for (let n in arr) {
    sum += arr[n]
  }
  
  return sum
};

const multiply = function(arr) {
  let product = 0;

  for (let n in arr) {
    product = (product * arr[n])
    if (product === 0) {
      product = arr[n];
    }
  }

  return product
};

const power = function(x, y) {
	return Math.pow(x, y)
};

const factorial = function(num) {
  let product = 1;
  let inc = 0;

  if (num === 0 ) { return 1 }  

	for(let i = 0; i < num; i++) {
    inc++;
    product = product * inc
  }

  return product
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
