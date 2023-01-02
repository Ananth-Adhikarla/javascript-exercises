const sumAll = function(num1, num2) {
  if(!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) return 'ERROR';
  if(num1 > num2){
    max = num1;
    min = num2;
  } 
  else{
    max = num2;
    min = num1;
  }
  return (((max - min)+1) * (max + min)) / 2;
};

// Do not edit below this line
module.exports = sumAll;
