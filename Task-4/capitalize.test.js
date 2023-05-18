const capitalize = require("./capitalize.js");

describe("capitalize", () => {
  it("capitalizes the first letter of a string", () => {
    expect(capitalize("hello coker")).toBe("Hello coker");
    expect(capitalize("0123")).toBe("0123");
    expect(capitalize("")).toBe("");
  });
});