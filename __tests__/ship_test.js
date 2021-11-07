const Ship = require("../src/ship");

describe("Ship", () => {
  it("returns an object", () => {
    expect(new Ship("Enfield")).toBeInstanceOf(Object);
  });
});

describe("Ship", () => {
  it("returns a starting port", () => {
    const ship = new Ship("Enfield");
    expect(ship.startingPort).toBe("Enfield");
  });
});
