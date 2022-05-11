const formatFirstLettertoUpperCase = (word) => {
  return word.split("").reduce((a, letter, idx) => {
    if (idx === 0) {
      letter = letter.toUpperCase();
    }
    a += letter;
    return a;
  }, "");
};

module.exports = {
  formatFirstLettertoUpperCase,
};
