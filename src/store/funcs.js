const formatFirstLettertoUpperCase = (word) => {
  return word.split("").reduce((a, letter, idx) => {
    if (idx === 0) {
      letter = letter.toUpperCase();
    }
    a += letter;
    return a;
  }, "");
};

const func = (str) => {
  const split = str.split(".");

  return `.${split[split.length - 1]}`;
};

module.exports = {
  formatFirstLettertoUpperCase,
  func,
};
