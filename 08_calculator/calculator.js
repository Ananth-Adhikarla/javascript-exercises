const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(sArray) {
	if(sArray.length === 0) return 0;
  return sArray.reduce((partialSum, a) => partialSum + a, 0);
};

const multiply = function(mArray) {
	if(mArray.length === 0) return 0;
  return mArray.reduce((partialSum, a) => partialSum * a, 1);
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(n) {
  let ouput = 1;
  if (n == 0 || n == 1){
    return ouput;
  }
  else if(n > 1){
    for(var i = n; i >= 1; i--){
      ouput = ouput * i;
    }
    return ouput;
  }
}
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
