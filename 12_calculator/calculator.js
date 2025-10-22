const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arg) {
	return arg.reduce((sum, value) => sum += value, 0);
};

const multiply = function(arg) {
  let mul = 1;
  for(it of arg) {
    mul *= it;
  }
  return mul;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(n) {
  let fact = 1;
  for(let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
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
