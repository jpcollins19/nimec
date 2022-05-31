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
      <div className="row-cont">
        <div className="head">Q:</div>
        <div className="q">{faq.Q}</div>
      </div>

      <div className="row-cont">
        <div className="head">A:</div>
        <div className="a-l">
          {first}
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
    </div>
  );
};

module.exports = {
  formatFirstLettertoUpperCase,
  func,
  urlNeeded,
};
