const { expect } = require("chai");
const { func } = require("./src/store/funcs");

describe("func finds file type", () => {
  it("does pdf", () => {
    const name = "2022 nDORFins Benefit Guide copy.pdf";
    const audit = func(name);

    expect(audit).to.equal(".pdf");
  });

  it("does png", () => {
    const name = "Screen Shot 2022-05-20 at 12.24.48 PM.png";
    const audit = func(name);
    console.log("nugget", audit);
    expect(audit).to.equal(".png");
  });

  it("does jpg", () => {
    const name = "FD-1.jpg";
    const audit = func(name);

    expect(audit).to.equal(".jpg");
  });
});
