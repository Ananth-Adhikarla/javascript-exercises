const removeFromArray = function(myArray, ...optional) {
  optional.forEach((optional) => {
    const index = myArray.indexOf(optional);
    if (index > -1) myArray.splice(index, 1);
  }); 
  return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
