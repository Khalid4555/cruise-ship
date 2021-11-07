const Ship = require("../src/ship");

describe("Ship", () => {
  it("returns an object", () => {
    expect(new Ship("Enfield")).toBeInstanceOf(Object);
  });
});

describe("startingPort", () => {
  it("returns a starting port", () => {
    const ship = new Ship("Enfield");
    expect(ship.startingPort).toBe("Enfield");
  });
});

describe("setSail", () => {
  it("retrun ", () => {
    const ship = new Ship("Enfield");

    ship.setSail();

    expect(ship.setSail()).toBeFalsy();
  });
});
