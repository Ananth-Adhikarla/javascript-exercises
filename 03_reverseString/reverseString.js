const reverseString = function(word) {
  if(word.length === 0) return '';
  return word.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
