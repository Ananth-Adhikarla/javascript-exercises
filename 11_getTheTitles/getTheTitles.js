const getTheTitles = function(books) {
  // alt solution : return array.map(book => book.title);
  let titles = [];
  books.forEach(book => {
    titles.push(book.title);
  }); 
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
