const caesar = function(word, num) {
  var output = "";

  for (var i = 0; i < word.length; i++) {
    var asciiVal = word.charCodeAt(i);

    if (asciiVal >= 65 && asciiVal <= 65 + 26 - 1) {
      asciiVal -= 65;
      asciiVal = mod(asciiVal + num, 26);
      asciiVal += 65;
    }
    if (asciiVal >= 97 && asciiVal <= 97 + 26 - 1) {
      asciiVal -= 97;
      asciiVal = mod(asciiVal + num, 26);
      asciiVal += 97;
    }

    output += String.fromCharCode(asciiVal);
  }

  return output;
};

function mod(n, p) {
  return n - p * Math.floor(n / p);
}

// Do not edit below this line
module.exports = caesar;
