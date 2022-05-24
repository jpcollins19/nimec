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

const urlNeeded = (faq, idx) => {
  const phraseFind = faq.linkWord;
  const idxStart = faq.A.indexOf(phraseFind);
  const idxEnd = idxStart + phraseFind.length;

  const first = faq.A.slice(0, idxStart);
  const phrase = faq.A.slice(idxStart, idxEnd);
  const second = faq.A.slice(idxEnd);

  return (
    <div key={idx} className="faq-single-cont">
      <div className="q">Q: {faq.Q}</div>
      <div className="a-l">
        A: {first}
        <a
          className="link"
          onClick={() => {
            window.open(faq.link);
          }}
        >
          {phrase}
        </a>
        {second}
      </div>
    </div>
  );
};

module.exports = {
  formatFirstLettertoUpperCase,
  func,
  urlNeeded,
};
