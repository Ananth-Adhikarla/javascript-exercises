const palindromes = function (str) {
  if(str.length === 0) return false;
  str = str.toLowerCase().replace(/[^a-z]/g, "");
  return (str == str.split("").reverse().join(""));
};

// Do not edit below this line
module.exports = palindromes;
