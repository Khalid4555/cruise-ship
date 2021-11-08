const Ship = require("../src/ship");
const Port = require("../src/port");

describe("Ship", () => {
  it("returns an object", () => {
    expect(new Ship(Port)).toBeInstanceOf(Object);
  });
});

describe("currentPort", () => {
  it("returns a starting port", () => {
    const port = new Port("Enfield");
    const ship = new Ship(port);
    expect(ship.currentPort).toBe(port);
  });
});

describe("setSail", () => {
  it("departure from current port ", () => {
    const port = new Port("Enfield");
    const ship = new Ship(port);

    ship.setSail();

    expect(ship.setSail()).toBeFalsy();
  });
});

describe("dock", () => {
  it("can dock ship at different ports ", () => {
    const port = new Port("Enfield");
    const ship = new Ship(port);

    const walthamstow = new Port("Walthamstow");

    ship.dock(walthamstow);

    expect(ship.currentPort).toBe(walthamstow);
  });
});
