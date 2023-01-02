const fibonacci = function(fibo) {
  if(fibo < 0) return 'OOPS';
  else fibo = Number.parseInt(fibo);
  if(fibo === 0) return 0;
  else if(fibo === 1) return 1;
  else return fibonacci(fibo - 1) + fibonacci(fibo - 2);
};

// Do not edit below this line
module.exports = fibonacci;
